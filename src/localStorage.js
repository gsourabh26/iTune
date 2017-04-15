
module.exports = {
    get: key => {
        return localStorage.getItem(key);
    },
    set: (key, value)=> {
        return localStorage.setItem(key, value);
    },
    clear: _=> {
        return localStorage.clear();
    }
}