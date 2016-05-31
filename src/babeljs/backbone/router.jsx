//pages
const FrontPage = require('../pages/front-page.jsx');

module.exports = Backbone.Router.extend({

    routes: {
                        '' : 'root',
                    'front': 'front',
                     'back': 'back',
    },

    initialize: function(options){
      this.$root = document.getElementById(options.rootId);
    },

    execute: function(callback, args, name) {
      console.log(name);
      callback && callback.apply(this, args);
    },

    root: function(){
      $('#root').html('root')
    },

    front: function(){
      ReactDom.render( <FrontPage/>, this.$root );
    },

    back: function(){
      $('#root').html('back')
    },


  })
