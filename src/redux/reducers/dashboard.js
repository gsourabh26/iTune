import {types} from "../actions";

export default (state={}, action={}) =>{
    switch (action.type) {
        case types.SEARCH_KEYWORD: {
            return {
                ...state,
                keyword : action.payload
            } 
        }
        case types.TUNES_LOADED: {
            return {
                ...state,
                fetchedItunes: action.payload && action.payload.itunes || [],
                itunes: action.payload && action.payload.itunes || []
            }
        }  
        case types.FILTER_VALUES:{
            var itunes = action.payload && action.payload.itunes || [];
            var filters = {
                artistName: [],
                primaryGenreName: [],
                trackPrice: 0     
            };
            itunes.forEach(tune=>{
                if(filters.artistName.length < 10 && filters.artistName.indexOf(tune.artistName) === -1){
                    filters.artistName.push(tune.artistName); 
                }
                if(filters.primaryGenreName.length < 10 && filters.primaryGenreName.indexOf(tune.primaryGenreName) === -1){
                    filters.primaryGenreName.push(tune.primaryGenreName); 
                }
                if(filters.trackPrice < tune.trackPrice){
                    filters.trackPrice = Math.ceil(tune.trackPrice);
                }    
            });
            return {
                ...state,
                filters
            }
        }  
        case types.APPLY_FILTER: {
            let oldFilter = state.filterApplied || {};
            let filter = action.payload;
            let filterToApply = {
                ...oldFilter,
                ...filter
            }
            let itunes = state.fetchedItunes;
            let filterItunes = itunes.filter(tune=>{
                for(let key in filterToApply){
                    let filterValue = filterToApply[key];
                      if(key === "trackPrice" && filterValue.from !== undefined && filterValue.to !== undefined && (tune[key] < filterValue.from || tune[key] > filterValue.to)){
                          return false
                      }
                      if(filterValue && filterValue.length > 0 && filterValue.indexOf(tune[key]) === -1){
                            return false;
                      }
                }
                return true;
            })
            return {
                ...state,
                filterApplied: filterToApply,
                itunes: filterItunes
            }
        }
        case types.SHOW_HISTORY:{
            return {
                ...state,
                openHistoryView: action.payload.showHistory
            }
        }
        default: 
            return state;    
    }
}