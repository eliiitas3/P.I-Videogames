const axios = require('axios');
const {API_KEY} = process.env

const getGenres = async()=>{
    try{
        let allgenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = allgenres.data.results.map(el=>el.name);
        return genres
    }
    catch(error){
        console.log(error)
    }
}
module.exports = getGenres