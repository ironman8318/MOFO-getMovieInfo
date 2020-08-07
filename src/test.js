//import React, { Component } from "react";
//import axios from "axios";
//
//class Home extends Component {
////    state = {
////        page: 1
////    };
//
//    onChangeHandler = event => {
//        const text = event.target.value;
//        // console.log(text);
//        this.setState({
//            input: text
//        });
//    };
//
//    searchButtonHandler = () => {};
//
//   
//
//    render() {
//        let movies = null;
//        if (this.state.results) {
//            movies = this.state.results.map(el => {
//                return (
//                    <div key={el.imdbId}>
//                        <img src={el.Poster} />
//                        <h2>{el.Title}</h2>
//                        <h3>{el.Year}</h3>
//                    </div>
//                );
//            });
//        }
//        return (
//            <div>
//                <input
//                    type="text"
//                    onChange={event => this.onChangeHandler(event)}
//                />
//                <button onClick={this.searchButtonHandler}>Search</button>
//                {movies}
//
                
//            </div>
//        );
//    }
//}
//
//export default Home;
