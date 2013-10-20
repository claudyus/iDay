module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('./package.json');

  grunt.initConfig({
    pkg: pkg,
    connect: {
      server: {
        options: {
          port: 9000,
          base: './www/',
          hostname: '',
          keepalive: true
        }
      }
    },
    changelog: {
      dest: '../CHANGELOG.md'
    },
  });

  grunt.registerTask('default', ['connect']);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-conventional-changelog');

};