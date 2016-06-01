var app = require('../app.js');

var navigate = function(href){
    console.log(href)
    app.router.navigate(href, true)
}

module.exports = navigate;
