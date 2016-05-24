module.exports = Backbone.Router.extend({

    routes: {
                        '' : 'root',
                    'front': 'front',
                     'back': 'back',
    },

    initialize: function(options){
      this.$root = document.getElementById(options.rootId);
      this.session = options.session;
    },

    execute: function(callback, args, name) {
      console.log(name);
      callback && callback.apply(this, args);
    },
    root: function(){
      console.log('rooted')
    },
    front: function(){
      $('#root').html('front')
    },
    back: function(){
      $('#root').html('back')
    },


  })
