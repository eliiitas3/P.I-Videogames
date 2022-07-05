import React from "react";
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Navbar({handle}){
    return(
        <div>
            <SearchBar handle={handle}/>
            <Link to='/create'>
                <button>Create Videogame</button>
            </Link>
        </div>
    )
}