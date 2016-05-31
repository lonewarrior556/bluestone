var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var globalShim = require('browserify-global-shim');

var b = browserify({
  entries: ['./src/babeljs/main.jsx'],
  cache: {},
  packageCache: {},
  plugin: [watchify],
  insertGlobalVars: {
    '$'        : function(){ return 'require("jquery")';},
    'Backbone' : function(){ return 'require("backbone")';},
    'ReactDom' : function(){ return 'require("react-dom")';},
    'React'    : function(){ return 'require("react")';},
    '_'        : function(){ return 'require("underscore")';}
  }
});

b.transform("babelify", {presets: ["es2015", "react"]});

b.on('update', bundle);
b.on('log',   function(msg) { console.log(msg);});

bundle(['babel/all']);

function bundle(ids) {
  console.log('bundling... ', ids.map(function(a){return (a.split('babel')[1] || (a||'') ).replace(/\\/g,'/');}));
  b.bundle()
  .on( "error", function(err){ console.log(err.message); })
  .pipe(fs.createWriteStream('./public/js/bundle.js'));
}
