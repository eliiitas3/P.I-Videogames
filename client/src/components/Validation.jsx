import React from "react";

export function Validate(input){
    let error={}
    
    if(!input.name){
        if(typeof input.name!=="string"){
            error.name = "The input value is incorrect"}
        error.name = "this input is required"}
    if(!input.description || input.description.length < 30){
        error.description = "please put a description bigger than 30 letters"
    }
    if(!input.released){
        if(!/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(input.released)){
            error.released="put a valid date"
        }
    }
    if(!input.image.includes("http://"||"https://"||".jpg"||".gif"||".png")){
        error.image = "put a valid url(.jpg, .gif, .png)"
    }
    if(!input.rating || input.rating < 0 || input.rating > 5 ){
        error.rating = "rating has to be bigger than 0 and smaller than 5"
    }
    if(!input.genres.length){
        error.genres = "choose a genre for your videogame"
    }
    if(!input.platforms.length){
        error.platforms = "choose a platform for your videogame"
    }
    return error
}
