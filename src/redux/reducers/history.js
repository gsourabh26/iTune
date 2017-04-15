import {types} from "../actions";

export default (state={}, action={}) =>{
    switch (action.type) {
        case types.SAVE_HISTORY: {
            let keySearch = action.payload.keyword;
            if(!keySearch){
                return state;
            }
            var history = state.history || [];
            return {
                ...state,
                history: [...history, keySearch]
            } 
        }    
        default: 
            return state;    
    }
}