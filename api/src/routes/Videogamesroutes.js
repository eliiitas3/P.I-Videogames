const {Router} = require('express');
const {getDbgames,getGamesById}= require('../controller/VideoGameController');
const {Videogame, Genre}= require ('../db');

const router = Router();

router.get('/:id',async(req,res)=>{
    let {id} = req.params;
    try{
        if(!id.includes('-')){
            const games = await getGamesById(id);
            res.status(200).json(games);
        }
        else{
            const allId= await getDbgames();
            let gameid = allId.find(el =>el.id === id);
            res.status(200).json(gameid)
        }
    }
    catch(error){res.status(404).send('Videogame Not Found.')}
})

router.post('/',async(req,res)=>{
    let {name,image,description,released,rating,genres,platforms,createdInDb}= req.body;
    
    try{
        const newVideogame= await Videogame.create({
            name, image,description,released,rating,platforms,createdInDb
        })
        const gamesDb =await Promise.all(genres.map(async (el)=>{
            await newVideogame.addGenres([
                (await Genre.findOrCreate({
                    where:{
                        name: el
                    }
                }))[0].dataValues.id  
            ])
        }))
        res.status(200).json('Added succesfully')
    }
    catch(error){res.status(404).send('The video game cant be created')}
})

module.exports= router