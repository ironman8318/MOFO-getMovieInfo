import React from "react";
import  classes from "./HomeIcon.module.css";
import sprite from "./sprite.svg";
import {Link} from "react-router-dom";

const icon = () => {
    return <Link to="/"><div className={classes.icon}>
            <svg><use href={sprite + "#icon-home"} className={classes.i}/></svg>
        
        </div></Link>
}

export default icon;