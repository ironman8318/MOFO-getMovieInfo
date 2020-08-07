import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import SearchResult from "../../components/SearchResult/SearchResult";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import Icon from "../../components/HomeIcon/HomeIcon";
import classes from "./Home.module.css"
class Home extends Component {
    
    state = {
        page: 1,
    }

    btnHandler = ()=> {
        this.setState(prevState => {
            return{
                page : prevState.page+1,
            }
        })    
    }
    
    setItemKeyHandler = (id) => {
        this.props.setItemKey(id);
      
        this.props.history.push("/movie/"+id);
    }
    
    componentDidMount(){
        this.props.removeItem();
    }
    
    render() {
        let movies = null;
        if (this.props.items) {
            movies = this.props.items.map(el => {
                const id = el.imdbID;
                
                return (
                    <SearchResult
                    setKey = {this.setItemKeyHandler.bind(this,id)}
                        key={el.imdbID}
                        img={el.Poster}
                        title={el.Title}
                        year={el.Year}
                    />
                );
            });
        }
const style={color:"#ff9e9e",fontSize:"2rem",textAlign:"center"}


        if (this.props.error) {
            movies = <p style={style}>Movie Not Found,please check all the fields</p>;
        }
        if(this.props.loading){
            movies = <Spinner />
        }
        
        return (
            <div>
                <h1 className={classes.heading}>MoFo &mdash; Get Movie Info </h1>
                <Icon />
                <SearchForm page={this.state.page}/>
                {movies}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.home.items,
        error: state.home.error,
        loading:state.home.loading,
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        setItemKey : (id) => {dispatch(actions.setItemKey(id))},
        removeItem : () => {dispatch(actions.removeItem())}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
