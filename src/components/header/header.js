import React from 'react';
import classes from "./header.module.scss"
import {NavLink} from "react-router-dom";
const Header = () => {
    return(
        <div className={classes.Header}>
            <NavLink to="/">Back to home</NavLink>
            <h1>Cat Application</h1>
            <hr/>
        </div>
    )
}
export default Header;