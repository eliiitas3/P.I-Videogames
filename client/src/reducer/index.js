const initialState={
    videogames: [],
    allvideogames: [],
    details:{},
    apivg:[],
    dbvg:[],
    genres:[]
}

function rootReducer(state = initialState,action){
    switch(action.type){
        case "GET_GAMES":
            return{
                ...state,
                videogames:action.payload,
                allvideogames:action.payload,
                apivg:action.payload.filter((el)=>!isNaN(el.id)),
                dbvg:action.payload.filter((el)=>isNaN(el.id)),
            }
        case "SEARCH_GAME":
            return{
                ...state,
                videogames: action.payload,
            }
        case "GET_DETAILS":
            return{
                ...state,
                details:action.payload,
            }
        case "ORDER_BY_ATOZ":
            let ordergames;
            if(action.payload === 'Az'){
                let orderAtoZ = state.videogames.sort((a,b)=>{
                    if (a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1
                    }
                    return 0
                });
                ordergames= orderAtoZ;
            }
            else{
                let orderZtoA= state.videogames.sort((a,b)=>{
                    if(a.name>b.name){
                        return -1
                    }
                    if (b.name>a.name){
                        return 1 
                    }
                    return 0
                })
                ordergames = orderZtoA
            }
            return {
                ...state,
                videogames:ordergames,
            }
        case "ORDER_BY_RATING":
            let ratingOrder;
            if(action.payload === 'MaxRating'){
                let orderMaxRating= state.videogames.sort((a,b)=>{
                    if (a.rating > b.rating){
                        return 1;
                    }
                    if(b.rating > a.rating){
                        return -1
                    }
                    return 0
                });
                ratingOrder = orderMaxRating
            }
            else{
                let orderMinRating= state.videogames.sort((a,b)=>{
                    if(a.rating > b.rating){
                        return -1
                    }
                    if(b.rating > a.rating){
                        return 1
                    }
                    return 0
                });
                ratingOrder= orderMinRating
            }
            return{
                ...state,
                videogames: ratingOrder
            }
            case "CLEAN":
                return{
                    ...state,
                    details:{}
                }
            case "FILTER_BY_CREATE":
                const filt= state.apivg
                const notFilt=state.dbvg
                return{
                    ...state,
                    videogames:action.payload === 'all'?notFilt.concat(filt) : action.payload ==='created' ? filt : notFilt
                }
            case "FILTER_BY_GENRE":
                const allVideoGames = state.allvideogames;
                const statusFilter = action.payload === 'dataBase' ? allVideoGames : allVideoGames.filter(e => e.genres.includes(action.payload))
                return {
                    ...state,
                    videogames: statusFilter
                }
            case "GET_GENRES":
                return{
                    ...state,
                    genres:action.payload
                }
            case "GAME_POST":
                return{
                    ...state
                }
        default:return {...state}
    }

    
}

export default rootReducer