import * as actionTypes from "./actionTypes";

import axios from "axios";

export const initSearch = (searchData) => {
    
    return dispatch => {
        dispatch(searchStart());
        const t =    searchData.title?`&s=${searchData.title}`:"";
        const plot = searchData.plot?`&plot=${searchData.plot}`:"";
        const year = searchData.year?`&y=${searchData.year}`:"";
        const type = searchData.type?`&type=${searchData.type}`:"";
        const page = searchData.page?`&page=${searchData.page}`:"";
        axios
            .post(
            `https://www.omdbapi.com/?apikey=aa0a30e1${t}${plot}${year}${type}${page}`
        )
            .then(res => {
            if(res.data.Error)dispatch(searchFailed(res.data.Error))
            else dispatch(searchSuccess(res.data.Search));
        })
            .catch(err => {
          
            dispatch(searchFailed(err));
        });
        
    }
}


export const initSearchItem = (id) => {

    return dispatch => {
        dispatch(searchStart(true));
        axios
            .post(
            `https://www.omdbapi.com/?apikey=aa0a30e1&i=${id}&plot=full`
        )
            .then(res => {
            dispatch(searchSuccess(res.data,true));
        })
            .catch(err => {
            
            dispatch(searchFailed(err,true));
        });

    }
}

const searchStart = (item=false) => { 
    return item?{type:actionTypes.SEARCH_ITEM_START}:{type:actionTypes.SEARCH_ITEMS_START}
}

const searchSuccess = (data,item=false) => {
    return item?{type:actionTypes.SEARCH_ITEM_SUCCESS,data:data}:{type:actionTypes.SEARCH_ITEMS_SUCCESS,data:data}
}

const searchFailed = (err,item=false) => {
    return item?{type:actionTypes.SEARCH_ITEM_FAILED,error:err}:{type:actionTypes.SEARCH_ITEMS_FAILED,error : err}
}

export const setItemKey = (key) => {
    return{
        type : actionTypes.SET_ITEM_KEY,
        itemKey : key,
    }
}


export const removeItem = () => {
    return {
        type: actionTypes.REMOVE_ITEM
    }
}

export const reset = () => {
    return{
        type : actionTypes.RESET,
    }
}