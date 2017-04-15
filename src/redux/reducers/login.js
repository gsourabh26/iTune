import {types} from "../actions";
import LS from "../../localStorage";

export default (state={}, action={}) =>{
    switch (action.type) {
        case types.LOAD_USER: {
            let user = action.payload;
            LS.set("user", JSON.stringify(user));
            return {
                ...state,
                user
            } 
        }    
        case types.LOGOUT: {
            LS.clear();
            let state = {...state};
            delete state.user;
            return state;
        }
        default: 
            return state;    
    }
}