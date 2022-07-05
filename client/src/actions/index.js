import axios from 'axios';


export function getAllGames(){
    return function(dispatch){
        return fetch("http://localhost:3001/videogames")
        .then(response=>response.json())
        .then(res=>{dispatch({
            type:"GET_GAMES",
            payload:res,
        })}) 
    }
    }


export function searchGame(payload){
    return async function(dispatch){
        try{
        let gamesByName = await axios.get(`http://localhost:3001/videogames?name=${payload}`)
        return dispatch({
            type:"SEARCH_GAME",
            payload:gamesByName.data
        })
    }catch(error){return alert("Videogame Not Found")}
}}

export function getDetail(id){
    return async function(dispatch){
        try{
            console.log(id)
            const details = await axios.get(`http://localhost:3001/videogame/${id}`);
            return dispatch({
                type:"GET_DETAILS",
                payload: details.data,
            })
        }
        catch(e){console.log(e)}
    }
}

export function orderByAtoZ(payload){
    return{
        type:"ORDER_BY_ATOZ",
        payload,
    }
}

export function orderByRating(payload){
    return{
        type:"ORDER_BY_RATING",
        payload,
    }
}

export function cleanner(){
    return{
        type:"CLEAN"
    }
}

export function filterByCreated(payload){
    return{
        type:"FILTER_BY_CREATE",
        payload,
    }
}

export function filterByGenre(payload){
    return{
        type:"FILTER_BY_GENRE",
        payload,
    }
}

export function getGenres(){
    return async function(dispatch){
        const genres = await axios.get('http://localhost:3001/genre');
        return dispatch({
            type:"GET_GENRES",
            payload:genres.data
        })
    }
}

export function postGame(payload){
    return async function(dispatch){
        const post= axios.post('http://localhost:3001/videogame',payload)
        return post
    }
}