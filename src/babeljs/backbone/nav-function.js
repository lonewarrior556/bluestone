var app = require('../app.js');

var navigate = function(e){
  var href = e.currentTarget.getAttribute('href');
  var protocol = e.currentTarget.protocol + '//';
  if(href.slice(protocol.length) !== protocol){
    e.preventDefault();
    app.router.navigate(href, true)
  }
}

module.exports = navigate;
