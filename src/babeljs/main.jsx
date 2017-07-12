const BBrouter = require('./backbone/router.jsx');
var app = require('./app.js');


$( document ).ready( function(){
    //set static components
    app.router = new BBrouter({rootId: 'root'});
    Backbone.history.start({pushState: true});
  });


$( document ).on("click", "a[href^='/']", function(event){
  let href = $(event.currentTarget).attr('href')
  if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey){
    event.preventDefault()
    //  Remove leading slashes
    let url = href.replace(/^\//,'').replace('\#\!\/','')
    //  Instruct Backbone to trigger routing events
    app.router.navigate(url, true)
    return false
  }
})
