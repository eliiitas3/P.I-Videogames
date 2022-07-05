import React,{useEffect} from "react";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { searchGame } from "../../actions";

export default function SearchBar({handle}){
    // const dispatch = useDispatch();
    // const [name, setName]= useState('');
    function handleSearch(name){
        handle(name)
    }
    return(
        <div>
            <input type="search" placeholder="Search videogame" onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
    )
    // function handleImput(e){
    //     e.preventDefault();
        
    //     setName(e.target.value);
    // }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     dispatch(searchGame(name))
        
    // }
    // return(
    //     <div>
    //         <input type='text' value={name} onChange={e=>handleImput(e)} placeholder='Search Game'/>
    //         <button type="submit" onClick={e=>handleSubmit(e)}>Search</button>
    //     </div>
    // )

}