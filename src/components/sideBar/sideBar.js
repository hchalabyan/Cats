import React, {useEffect, useState} from "react";

import classes from "./sideBar.module.scss"
import {NavLink} from "react-router-dom";
import {getCategory} from "../../slices/categorySlice"
import {useDispatch, useSelector} from "react-redux";

const SideBar = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState([]);

    useEffect(() => {
        dispatch(getCategory()).unwrap()
            .then((res) => {
                let {code, payload} = res
                    if (code === 200) {
                        setCategory(payload.data)
                    }
            })
            .catch((error) => {
                console.log(error)
            })


    },[])
    return(
        <>

                <div className={classes.SideBar}>
                {category.map((category) => {
                    return(
                        <NavLink to={`/${category.name}`} key={category.id}>{category.name}</NavLink>
                    )
                })}

            </div>
    </>

    )
}

export default SideBar;