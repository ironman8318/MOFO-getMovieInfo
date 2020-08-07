import React,{Component} from "react";
import Movie from "../../components/Movie/Movie";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner"
import Icon from "../../components/HomeIcon/HomeIcon";

class FullMovie extends Component{
    
    componentDidMount(){
    
        this.props.initSearchItem(this.props.match.params.id);
       
    }
    
    
    
    render(){
    
        let movie = null;
        if(this.props.loading) movie = <Spinner />
        if(this.props.item) movie = <div><Icon /><Movie {...this.props.item} /></div>
        return movie;
         
    }
    
    
}

const mapStateToProps = state => {
    return {
        itemKey : state.home.itemKey,
        item : state.home.item,
        loading :state.home.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        initSearchItem : (itemKey) => {dispatch(actions.initSearchItem(itemKey))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FullMovie);