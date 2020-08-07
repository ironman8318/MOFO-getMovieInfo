import React from "react";
import classes from "./Movie.module.css";
const movie = (props) => {
    
    return(
        <div className={classes.container}>
            <div className={classes.movie__img}>
                <img src={props.Poster} alt="" />              
            </div>
            
            <div className={classes.movie__content}>
                <h1 className={classes.movie__title}>{props.Title}</h1>
                <div className={classes.movie__metadata}>
                    <p className={classes.movie__rating}>IMDB : <span>{props.imdbRating}</span></p>
                    <p className={classes.movie__date}>Released Date : <span>{props.Released}</span></p>
                    <p className={classes.movie__genre}>Genre : <span>{props.Genre}</span></p>
                </div>
                <div className={classes.movie__metadata2}>
                    <p className={classes.movie__runtime}>Runtime : <span>{props.Runtime}</span></p>
                    <p className={classes.movie__language}>Language :  <span>{props.Language}</span></p>
                    <p className={classes.movie__rated}>Rated : <span>{props.Rated}</span></p>
                </div>

                <div className={classes.movie__cast}>
                    <div className={classes.movie__actors}>
                        <h4>Actors</h4>
                        <p>{props.Actors}</p>
                    </div> 

                <div className={classes.movie__director}>
                        <h4>Director</h4>
                        <p>{props.Director}</p>
                    </div> 
                </div>

                <div className={classes.movie__plot}>
                    <p>{props.Plot}</p>
                </div>
        
            <div className={classes.movie__metadata3}>
                <p className={classes.movie__rating}>Awards : <span>{props.Awards}</span></p>
                <p className={classes.movie__date}>Writer : <span>{props.Writer}</span></p>
                
            </div>

            </div>
        </div>
    )
}

export default movie;