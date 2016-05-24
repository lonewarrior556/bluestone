var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');

var b = browserify({
  entries: ['./src/babeljs/main.es6'],
  cache: {},
  packageCache: {},
  plugin: [watchify],
});

b.on('update', bundle);
b.on('log',   function(msg) { console.log(msg);});
b.transform("babelify", {presets: ["es2015", "react"]});
bundle(['babel/all']);

function bundle(ids) {
  console.log('bundling... ', ids.map(function(a){return (a.split('babel')[1] || (a||'') ).replace(/\\/g,'/');}));
  b.bundle()
  .on( "error", function(err){ console.log(err.message); })
  .pipe(fs.createWriteStream('./public/js/bundle.js'));
}
