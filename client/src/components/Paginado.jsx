import React from "react";

export default function Paginated({
    videogamesPerPage,
    allGames,
    paginated,
    currentPage,    
}){
    let pageNumber = [];      for (let i = 0; i < Math.ceil(allGames / videogamesPerPage); i++) {
        pageNumber.push(i + 1);
    }
    return(
        <div>
    <nav>
    <ul>
        {currentPage > 1 ? (
        <li onClick={() => paginated(currentPage - 1)}>
            <button>Prev</button>
        </li>
        ) : null}
        <li onClick={() => paginated(currentPage)}>
        <button>{currentPage}</button>
        </li>
        {currentPage < allGames / videogamesPerPage ? (
        <li onClick={() => paginated(currentPage + 1)}>
            <button >Next</button>
        </li>
    ) : null}
    </ul>
    </nav>
        </div>
    )
}