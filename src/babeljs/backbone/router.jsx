const EventEmitter = require('events');
//pages
const Home = require('../pages/home.jsx');
const About = require('../pages/about.jsx');
const Services = require('../pages/services.jsx');
const Newsroom = require('../pages/newsroom.jsx');
const Careers = require('../pages/careers.jsx');
const Contact = require('../pages/contact.jsx');
//components
const NavMenu = require('../components/nav-menu.jsx');


module.exports = Backbone.Router.extend({

    routes: {
                ''           : 'home',
                'about'      : 'about',
                'services'   : 'services',
          'services/:page'   : 'servicesPage',
                'newsroom'   : 'newsroom',
                'careers'    : 'careers',
                'contact'    : 'contact'
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
      ReactDom.render( <Home/>, this.$root );
    },
    about: function(){
      ReactDom.render( <About/>, this.$root );
    },
    services: function(){
      ReactDom.render( <Services/>, this.$root );
    },
    servicesPage: function(page){

    },
    newsroom: function(){
      ReactDom.render( <Newsroom/>, this.$root );
    },
    careers: function(){
      ReactDom.render( <Careers/>, this.$root );
    },
    contact: function(){
      ReactDom.render( <Contact/>, this.$root );
    },

  })
