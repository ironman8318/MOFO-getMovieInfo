import * as actionTypes from "../actions/actionTypes";

const initialState = {
    items : [],
    error: null,
    loading : false,
    itemKey : null,
    item : null,
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.SEARCH_ITEM_START:
        case actionTypes.SEARCH_ITEMS_START:
            return{
                ...state,
                loading:true,
                error : null,
            }
        case actionTypes.SEARCH_ITEMS_SUCCESS:
            return{
                ...state,
                items : action.data,
                loading:false,
            }
        case actionTypes.SEARCH_ITEM_FAILED:
        case actionTypes.SEARCH_ITEMS_FAILED:
            return{
                ...state,
                error: action.error,
                loading:false,
            }
        case actionTypes.SEARCH_ITEM_SUCCESS:
            return{
                ...state,
                item : action.data,
                loading:false,
            }
        case actionTypes.SET_ITEM_KEY:
            return{
                ...state,
                itemKey :action.itemKey,
            }
        case actionTypes.REMOVE_ITEM:
            return{
                ...state,
                itemKey:null,
                item : null,
            }
        case actionTypes.RESET:
            return{
                ...state,
                ...initialState
            }
        default:
            return state;
    }
    
    
}

export default reducer;