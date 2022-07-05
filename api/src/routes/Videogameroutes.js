const {Router} = require('express');
const {allVideoGames, getGamesByname, getDbgames}= require('../controller/VideoGameController');

const router = Router();

router.get('/', async(req,res)=>{
    const {name}= req.query
    
    try{
        if(name){
            let getName = await getGamesByname(name);
            let getNameDb = await getDbgames();
            getNameDb= getNameDb.map(el=>({
                id:el.id,
                image:el.image,
                name: el.name,
                genres:el.genres
            }));
            getNameDb = getNameDb.filter(el =>el.name.includes(name))
            const allGames = getName.concat(getNameDb);
            allGames
            ? res.status(200).json(allGames)
            :res.status(404).send('The video game no exist try another one')
        }
        else{
            const getGames= await allVideoGames();
            res.status(200).json(getGames)
        }
    }
    catch(error){console.log(error)}
})

module.exports = router