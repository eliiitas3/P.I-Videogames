const {Router} = require('express');
const {Genre} = require('../db');
const getGenres = require('../controller/GenreController');

const router = Router();

router.get('/', async(req,res)=>{
    try{
        const getGenresgames= await getGenres();
        getGenresgames.forEach(el=>{
            Genre.findOrCreate({
                where:{
                    name:el
                }
            })
        })
        const allGenres = await Genre.findAll({attributes: ['name','id']});
        res.status(200).json(allGenres)
    }
    catch(error){console.log(error)}
})

module.exports= router