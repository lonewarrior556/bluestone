var app = require('../app.js');

var navigate = function(href){
    app.router.navigate(href, true)
}

module.exports = navigate;
