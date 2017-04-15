import types from "./types";

var searchKeyword = payload => {
    return {
        payload,
        type: types.SEARCH_KEYWORD 
    }
}

var loadTunes = payload => {
    return {
        payload,
        type: types.LOAD_TUNES
    }
}

var tunesLoaded = payload => {
    return {
        payload,
        type: types.TUNES_LOADED
    }
}

var filterValue = payload =>{
    return {
        payload,
        type: types.FILTER_VALUES
    }
}

var applyFilter = payload =>{
    return {
        payload,
        type: types.APPLY_FILTER
    }
}

var saveHistory = payload =>{
    return {
        payload,
        type: types.SAVE_HISTORY
    }
}

var showHistory = payload =>{
    return {
        payload,
        type: types.SHOW_HISTORY
    }
}

var logout = _ => {
    return {
        type: types.LOGOUT
    }
}

module.exports = {
    searchKeyword,
    loadTunes,
    tunesLoaded,
    filterValue,
    saveHistory,
    showHistory,
    applyFilter,
    logout
}
