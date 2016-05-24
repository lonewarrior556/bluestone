module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
               test : 'echo build',
               test2: 'echo built'
   },
   watch: {
      reload: {
        files: ['public/js/bundle.js'],
        tasks: ['exec']
      }
    },
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
}
