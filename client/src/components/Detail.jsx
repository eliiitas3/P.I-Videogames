import React from "react";
import {Link, useParams} from "react-router-dom";
import { cleanner, getDetail } from "../actions";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";

export default function Detail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const detal = useSelector((state)=>state.details) 
    useEffect(()=>{
        dispatch(getDetail(id))
        dispatch(cleanner())
    },[dispatch,id])
    
    return(
        <div>
            <Link to='/Home'><button>Back</button></Link>
            <h1>{detal.name}</h1>
            <img src={detal.image}/>
            <p>Genres: {detal.genres>1?detal.genres.join('-'):detal.genres}</p>
            <p>Platforms: {detal.platforms}</p>
            <p>Description: {detal.description}</p>
            <p>Released date: {detal.released}</p>
            <p>Rating: {detal.rating}</p>
        </div>
    )
} 