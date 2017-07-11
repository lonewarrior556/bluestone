//libs
const $ = require('jquery');
const _ = require('underscore');
const EventEmitter = require('events');
//pages
const Home = require('../pages/home.jsx');
const List = require('../pages/list.jsx');
const Details = require('../pages/details.jsx');
//components
const NavMenu = require('../components/nav-menu.jsx');


var self;
module.exports = Backbone.Router.extend({

    routes: {
                ''           : 'home',
                'list'       : 'list',
          'details/:name'    : 'details'
    },

    initialize: function(options){
      self = this;
      this.$root = document.getElementById(options.rootId);
      this.emitter = new EventEmitter();
      ReactDom.render( <NavMenu emitter={this.emitter}/>, document.getElementById('header'));
    },

    execute: function(callback, args, name) {
      this.emitter.route = name;
      this.emitter.emit('route');
      callback && callback.apply(this, args);
    },

    home: function(){
      ReactDom.render( <Home/>, this.$root );
    },

    list: function(){
      $.ajax({ url: '/data/data.json' }).then(function(data){
        ReactDom.render( <List baseObjects={data}/>, self.$root );
      }, console.log )
    },
    details: function(name){
      $.ajax({ url: '/data/data.json' }).then(function(data){
        ReactDom.render( <Details baseObject={_.findWhere(data, {name:name})||{} }/>, self.$root );
      }, console.log )

    }

  })
