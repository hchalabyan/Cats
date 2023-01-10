import React, {useState,useEffect} from "react";

import classes from "./content.module.scss"
import {useDispatch, useSelector} from "react-redux";
import { getImages} from "../../slices/imagesSlice";

const Content = (props) => {
    const dispatch = useDispatch()
    const {  loading } = useSelector((state) => state.images)
    const [clicked, setClicked]  = useState(false)

    const [images, setImages] = useState([]);

const fetchImages = () => {
    dispatch(getImages(`${props.id}`)).unwrap()
        .then((res) => {
            let {code, payload} = res
            if (code === 200) {
                setImages((image) => [ ...image,...payload.data])
            }
        })
        .catch((error) => {
            console.log(error)
        })
}
    useEffect(() => {
            fetchImages();

    },[])
    const LoadClickHandler = (e) => {
        e.preventDefault();
        fetchImages()
    }
    console.log("images", images)
    return(<>
            {loading ? <p>Loading...</p> :
                <div className={classes.Content}>
                {images.map((image) => {
                    return(
                        <>
                             <div className={classes.ImageWrapper} key={image.id}>
                                <img src={image.url}  alt=""/>
                            </div>

                        </>

                    )
                })}
            </div>}
            <button className={classes.MoreBtn}  onClick={LoadClickHandler}>Load more</button>
    </>


    )
}

export default Content;