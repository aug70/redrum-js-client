module.exports = function(grunt) {

    grunt.config.set('mocha_istanbul', {

        coverage: {
            
            src: ['test/unit/**/*.test.js'],

            options: {
                timeout: 50000,
                colors: true,
                ui: 'bdd',
                reporter : process.env.USER === 'shippable' ? 'xunit-file' : 'spec',
                root: 'api/',
                excludes: ['policies/**', 'responses/**'],
                coverage: true,
                coverageFolder: 'shippable/codecoverage',
                reportFormats: process.env.USER === 'shippable' ? ['lcovonly', 'cobertura'] : ['lcov'],
                dryRun: false
            }


        }

	});

	grunt.loadNpmTasks('grunt-mocha-istanbul');
};