const _ = require('underscore');
const BBrouter = require('./backbone/router.jsx');


$( document ).ready( function(){

    //set static components


    var bbRouter = new BBrouter({rootId: 'root'});
    Backbone.history.start({pushState: true});
  });
