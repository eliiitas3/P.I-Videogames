import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCreated, filterByGenre, getAllGames, orderByAtoZ, orderByRating, searchGame } from "../actions";
import Card from "./Card";
import Navbar from "./Navbar/Navbar";
import Paginated from "./Paginado";
import styles from "./Modules/card.module.css"

export default function Home(){
    const dispatch = useDispatch();
    const [order,setOrder]= useState('')
    const allGames = useSelector((state)=>state.videogames)
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage]= useState(15)
    const lastVideogameIndex= currentPage* videogamesPerPage;
    const firstVideogameIndex = lastVideogameIndex- videogamesPerPage;
    const currentGames= allGames.slice(firstVideogameIndex, lastVideogameIndex);
    const paginated = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    
    useEffect(()=>{
        dispatch(getAllGames())
    },[dispatch])

    function handlesortalpha(e){
        e.preventDefault();
        dispatch(orderByAtoZ(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    }

    function handlerRefresh(e){
        window.location.reload(false)
    }

    function handelSortRating(e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    }

    function handleFilterCreated(e){
        e.preventDefault();
        dispatch(filterByCreated(e.target.value))
        setOrder(e.target.value);
        setCurrentPage(1);
    }

    function handleFilterGenres(e){
        e.preventDefault();
        dispatch(filterByGenre(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    }

    function handlerSearch(name){
        dispatch(searchGame(name))
        setCurrentPage(1)
    }

    return(
        <div>
            <h1 style={{display:'flex',allignItems:"center",justifyContent:'center'}} data-text='VideoGames' className={styles.h1}>VideoGames</h1>
            <Navbar handle={(name)=>handlerSearch(name)}/>
            <button className={styles.select} onClick={(e)=>{handlerRefresh(true)}}>Refresh</button>
            <select className={styles.select}  onChange={(e)=> handlesortalpha(e)}>
                <option hidden>Order by alf</option>
                <option value='Az'>Az</option>
                <option value='Za'>Za</option>
            </select>
            <select className={styles.select} onChange={(e)=> handelSortRating(e)}>
                <option hidden>Order by rating</option>
                <option value="MaxRating">Min rating</option>
                <option value="MinRating">Max rating</option>
            </select>
            <select className={styles.select} onChange={(e)=>handleFilterCreated(e)}>
                <option hidden>Filter by created</option>
                <option value='all'>all videogames</option>
                <option value='created'>Not created</option>
                <option value='notcreated'>Created</option>
            </select>
            <select className={styles.select} onChange={(e)=> handleFilterGenres(e)}>
                <option value='dataBase' >All genres</option>
                <option value='Action'>Action</option>
                <option value='Indie' >Indie</option>
                <option value='RPG'>RPG</option>
                <option value='Adventure' >Adventure</option>
                <option value='Strategy'>Strategy</option>
                <option value='Shooter'>Shooter</option>
                <option value='Casual' >Casual</option>
                <option value='Simulation' >Simulation</option>
                <option value='Puzzle'>Puzzle</option>
                <option value='Arcade' >Arcade</option>
                <option value='Platformer'>Platformer</option>
                <option value='Racing' >Racing</option>
                <option value='Massively Multiplayer'>Massively Multiplayer</option>
                <option value='Sports' >Sports</option>
                <option value='Fighting'>Fighting</option>
                <option value='Family' >Family</option>
                <option value='Board Games'>Board Games</option>
                <option value='Educational' >Educational</option>
                <option value='Card'>Card</option>
            </select>
            {allGames.length > 15 ? (
                <Paginated
                videogamesPerPage={videogamesPerPage}
                allGames={allGames.length}
                paginated={paginated}
                currentPage={currentPage}/>
            ) : null
            }
            
                <span className={styles.span}>
                    {currentGames?.map((e)=>{
                        return(
                            <Card name={e.name} key={e.id} id={e.id} image={e.image} genres={e.genres>1?e.genres.join(' '):e.genres} rating={e.rating}/> 
                        )
                    })}
                </span>
            
        </div>
    )
}