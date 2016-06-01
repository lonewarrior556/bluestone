const EventEmitter = require('events');
//pages
const FrontPage = require('../pages/front-page.jsx');
//components
const NavMenu = require('../components/nav-menu.jsx');


module.exports = Backbone.Router.extend({

    routes: {
                ''         : 'home',
                about      : 'about',
                services   : 'services',
                newsroom   : 'newsroom',
                careers    : 'careers',
                contact    : 'contact'
    },

    initialize: function(options){
      this.$root = document.getElementById(options.rootId);
      this.emitter = new EventEmitter();
      this.nav = ReactDom.render( <NavMenu emitter={this.emitter}/>, document.getElementById('header'));
    },

    execute: function(callback, args, name) {
      this.emitter.route = name;
      this.emitter.emit('route');
      callback && callback.apply(this, args);
    },

    home: function(){
    },
    about: function(){
      // ReactDom.render( <FrontPge/>, this.$root );
    },
    services: function(){
    },
    newsroom: function(){
    },
    careers: function(){
    },
    contact: function(){

    },

  })
