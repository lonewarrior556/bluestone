//Global Vars ==  ReactDom,React,Backbone,Jquery, "_");

const BBrouter = require('./backbone/router.jsx');

var app = require('./app.js');


$( document ).ready( function(){
    //set static components
    app.router = new BBrouter({rootId: 'root'});
    Backbone.history.start({pushState: true});
  });
