import {types, loadTunes, tunesLoaded, filterValue, saveHistory} from "../actions";
var timer = void 0;
import fetch from "../../fetch";

var dashboard = (state) => (next) => (action) => {
    switch (action.type){
        case types.SEARCH_KEYWORD: {
            //todo on the basis of keyword call on itune and dispach a new action show playlist..
            if(timer){
                clearTimeout(timer);
                timer = void 0;
            }
            timer = setTimeout(_=>{
                  state.dispatch(loadTunes({keyword: action.payload}))  
            },1000);
            next(action);
            break;
        }
        case types.LOAD_TUNES: {
            let url = "https://itunes.apple.com/search?term="+ (action.payload.keyword || '\"\"' ) +"&callback=?";
            state.dispatch(saveHistory(action.payload));
            return fetch(url).then(result => {
               state.dispatch(tunesLoaded({itunes: result.results}))
            });
        }
        case types.TUNES_LOADED: {
            state.dispatch(filterValue({itunes: action.payload.itunes}));
            next(action);
        }
        default :
            next(action);

    }
}

module.exports = dashboard;



