import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/Modules/card.module.css"

export default function Card({name,id,image,genres,rating,description}){
    return(
            <div className={styles.card}>
                <h3>{name}</h3>
                <img src={image} alt='img not found' width='200px'/>
                <p>Generos:{genres>1?genres.join('-'):genres}</p>
                <p style={{whiteSpace: "pre-wrap"}}>Rating:{rating}</p>
                <Link to = {`/videogame/${id}`}>
                <button className={styles.detailbutton}>Detalles</button>
            </Link>
            </div>
    )
}