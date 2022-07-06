import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Modules/card.module.css'

export default function LandingPage(){
    return(
        <div style={{width:"100vw",height:"100vh", display:'flex',justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
            <h1 data-text='Press play' className={styles.h1}>Press play</h1>
            <Link to ='/Home'>
                <button className={styles.detailbutton}>Play</button>
            </Link>
        </div>
    )
}