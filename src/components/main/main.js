import React from "react";
import classes from "./main.module.scss"
import Content from "../content/content";

const Main = () => {
    return(
        <div className={classes.Main}>
            <Content id={1}/>
        </div>
    )
}

export default Main;