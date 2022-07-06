import React from "react";
import {Link, useParams} from "react-router-dom";
import { cleanner, getDetail } from "../actions";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import styles from './Modules/card.module.css'

export default function Detail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const detal = useSelector((state)=>state.details) 
    useEffect(()=>{
        dispatch(getDetail(id))
        dispatch(cleanner())
    },[dispatch,id])
    
    return(
        <div className={styles.div}>
            
            <h1>{detal.name}</h1>
            <img src={detal.image} width='500px'/>
            <p>Genres: {detal.genres>1?detal.genres.join('-'):detal.genres}</p>
            <p>Platforms: {detal.platforms}</p>
            <p>Description: {detal.description}</p>
            <p>Released date: {detal.released}</p>
            <p>Rating: {detal.rating}</p>
            <Link to='/Home'><button className={styles.detailbutton}>Back</button></Link>
        </div>
    )
} 