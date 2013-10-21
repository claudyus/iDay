module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('./package.json');

  grunt.initConfig({
    pkg: pkg,
    connect: {
      server: {
        options: {
          port: 4000,
          base: './www/',
          hostname: '',
          keepalive: true
        }
      }
    },
    changelog: {
      dest: '../CHANGELOG.md'
    },
    cordovacli: {
      options: {
          path: '.'
      },
      add_platform: {
          options: {
              command: 'platform',
              action: 'add',
              platforms: ['ios', 'android']
          }
      },
      add_plugins: {
          options: {
              command: 'plugin',
              action: 'add',
              plugins: [
                  //'bluetoothserial',
                  'console',
                  'dialogs'
              ]
          }
      },
      build_android: {
          options: {
              command: 'build',
              platforms: ['android']
          }
      },
      emulate_android: {
          options: {
              command: 'emulate',
              platforms: ['android']
          }
      }
    }
  });

  grunt.registerTask('default', ['connect']);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-cordovacli');

};