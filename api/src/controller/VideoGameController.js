require("dotenv").config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Videogame , Genre }= require ('../db');

const getAllGames = async()=>{
    try{
        let i =1
        let listGames =[]
        while (i<6){
            let getApi= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`) 
            listGames.push(getApi);
            i++;
        };
        listGames= (await Promise.all(listGames)).map(el=>el.data.results.map(el=>{
            return({
                id: el.id,
                name: el.name,
                image: el.background_image,
                rating: el.rating,
                genres: el.genres.map(el=>el.name),
                platforms: el.platforms.map(el=>el.platform.name)
            })
        }))
        let allGames = []
        listGames.map(el=>{allGames= allGames.concat(el)})
        
        return allGames
    }
    catch(error)
    {console.log(error)};
}

const getGamesByname = async(game)=>{
    try{
        let games = await axios.get(`https://api.rawg.io/api/games?search=${game}&key=${API_KEY}`);
        let pepito= games.data.results.map(el=>{
            return({
                id: el.id,
                image: el.background_image? el.background_image : 'image not found',
                name:el.name,
                genres: el.genres.map(el=>el.name)
            })
        })
        return pepito
    }
    catch(error){console.log(error)}
}

const getDbgames= async ()=>{
    try{
        let dbgames= (await Videogame.findAll({
            attributes:  ['name','image','id','released','rating','platforms'],
            include:{
                model:Genre,
                attributes:['name'],
                through:{
                    attributes:[]
                }
            }
        }))
        const videogamesInfo= dbgames?.map(el=>{
            return{
                ...el.dataValues,
                genres: el.genres?.map(gen=>gen.name)
            }
        })
        return videogamesInfo
    }
    catch(error){console.log(error)}
}
const allVideoGames = async()=>{
    const prueba = await getAllGames()
    const prueba2 = await getDbgames()
    const prueba3 = prueba?prueba.concat(prueba2): prueba
    return prueba3
    
}

const getGamesById = async(id)=>{
    try{
        let gamesId = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        gamesId = gamesId.data;
        
        gamesId = {
            id:gamesId.id,
            image: gamesId.background_image?gamesId.background_image:'img not found',
            name: gamesId.name,
            description: gamesId.description_raw,
            genres: gamesId.genres.map(el=>el.name),
            released: gamesId.released,
            rating: gamesId.rating,
            platforms: gamesId.platforms.map(el=>el.platform.name)
        }
        return gamesId
    }
    catch(error){console.log(error)}
}

module.exports={
    getAllGames,
    getGamesByname,
    getDbgames,
    allVideoGames,
    getGamesById,
}