import React from "react";
import classes from "./SearchResult.module.css";

const searchResult = props => {
    return (
        <div class={classes.search} onClick={props.setKey}>
            <img
                src={props.img}
                alt=""
                class={classes.search__img}
            />
            <div class={classes.search__content}>
                <h1 class={classes.search__title}>{props.title}</h1>
                <p class={classes.search__year}>{props.year}</p>
                
            </div>
        </div>
    );
};

export default searchResult;
