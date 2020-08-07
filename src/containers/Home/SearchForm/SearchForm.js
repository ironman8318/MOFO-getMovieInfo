import React, { Component } from "react";

import classes from "./SearchForm.module.css";
import Input from "../../../components/UI/Input/Input";
import {connect} from "react-redux";
import * as actions from "../../../store/actions/index";

class searchForm extends Component {
    state = {
        form: {
            title: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placholder: "Title"
                },
                label: "Title",
                value: "",
                specialStyle: true
            },
            year: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placholder: "Title"
                },
                label: "year",
                value: ""
            },
            plot: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { displayValue: "Short", value: "short" },
                        { displayValue: "Full", value: "full" }
                    ]
                },
                label: "plot",
                value: "short"
            },
            type: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { displayValue: "Movie", value: "movie" },
                        { displayValue: "Series", value: "series" },
                        { displayValue: "Episode", value: "episode" },
                    ]
                },
                label: "Type",
                value: "movie"
            }
        },
        page :1,
        
    };

    

    onChangeHandler = (event, key) => {
        const value = event.target.value;
        const updatedForm = { ...this.state.form };
        const updatedElement = { ...updatedForm[key] };
        updatedElement.value = value;
        updatedForm[key] = updatedElement;
        this.setState({ form: updatedForm });
    };

    onSubmitHandler = (event)=>{
        if(event){
            event.preventDefault();
            this.setState({page : 1});
        }
        const form = this.state.form;
        const searchData = {
            title : form.title.value,
            year : form.year.value,
            plot : form.plot.value,
            type : form.type.value,
            page : 1,
        }
        this.props.initSearch(searchData);
    }

    nextPageHandler = () => {
    
        this.setState({page : this.state.page+1})
        const form = this.state.form;
        const searchData = {
            title : form.title.value,
            year : form.year.value,
            plot : form.plot.value,
            type : form.type.value,
            page : this.state.page+1,
        }
        this.props.initSearch(searchData);
        
        
        
    };  
    
    resetHandler = (event) => {
        event.preventDefault();
        const form = this.state.form;
        form.title.value="";
        form.year.value = ""
        form.plot.value = ""
        form.type.value =""
        this.setState({page : 1});
        this.props.reset();
    }

    render() {
        const inputElement = this.state.form;
        let inputs = [];
        for (let key in inputElement) {
            let el = inputElement[key];
            inputs.push(
                <Input
                    changed={event => this.onChangeHandler(event, key)}
                    key={key}
                    value={el.value}
                    elementType={el.elementType}
                    elementConfig={el.elementConfig}
                    label={el.label}
                    specialStyle={el.specialStyle}
                />
            );
        }
        const button = this.props.items.length>0?<button className={classes.next} onClick={this.nextPageHandler}>Next</button>:null;
        return (
            <div className={classes.container}>
            <div className={classes.FormContainer}>
                <h2 className={classes.title}>By Title </h2>

                <form className={classes.form}>
                    {inputs}
                    <div className={classes.inputGroup}>
                        <button onClick={this.onSubmitHandler} className={classes.search}>Search</button>
            <button className={classes.reset} onClick={this.resetHandler}>Reset</button>
                    </div>
                </form>
            </div>
            {button}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        items:state.home.items,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        initSearch : (searchData) => {dispatch(actions.initSearch(searchData))},
        reset : () => {dispatch(actions.reset())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(searchForm);
