var $ = require("../public/jquery");

var fetchData = url => {
    return $.getJSON(url);
}

export default fetchData;