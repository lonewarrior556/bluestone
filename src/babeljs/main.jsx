const BBrouter = require('./backbone/router.jsx');
const ReactDom = require('react-dom');

//components
const NavMenu = require('./components/nav-menu.jsx');

var app = require('./app.js');
$( document ).ready( function(){
    //set static components

    ReactDOM.render( <NavMenu/>, document.getElementById('header'));

    app.router = new BBrouter({rootId: 'root'});
    Backbone.history.start({pushState: true});
  });
