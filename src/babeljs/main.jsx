//Global Vars ==  ReactDom,React,Backbone,Jquery, "_");

const BBrouter = require('./backbone/router.jsx');
//components
const NavMenu = require('./components/nav-menu.jsx');

var app = require('./app.js');


$( document ).ready( function(){
    //set static components

    ReactDom.render( <NavMenu/>, document.getElementById('header'));

    app.router = new BBrouter({rootId: 'root'});
    Backbone.history.start({pushState: true});
  });
