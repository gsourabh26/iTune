import types from "./types";

var loadUser = payload => {
    return {
        payload,
        type: types.LOAD_USER 
    }
}

module.exports = {
    loadUser
}
