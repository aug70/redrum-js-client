
module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    mochaTest: {
      test: {
        options: {
          reporter: 'xunit',
          colors: true,
          recursive: true,
          require: 'assert',
          timeout: 5000,
          ui: 'bdd'
          //require: 'coverage/blanket'
        },
        src: ['test/unit/services/*.js']
      },
      coverage: {
        options: {
          reporter: 'xunit',
          // use the quiet flag to suppress the mocha console output
          quiet: true,
          // specify a destination file to capture the mocha
          // output (the quiet option does not suppress this)
          captureFile: 'coverage.html'
        },
        src: ['test/unit/services/*.js']
      }
    }  });

  grunt.loadNpmTasks('grunt-mocha-test');
};


