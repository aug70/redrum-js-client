module.exports = function(grunt) {

    grunt.config.set('mocha_istanbul', {

        coverage: {
            src: [
                'test/unit/**/*.test.js'],
            options: {
                globals: ['assert'],
                timeout: 50000,
                colors: true,
                ui: 'bdd',
                reporter: 'spec',
                root: 'api/',
                coverage: true,
                coverageFolder: 'shippable/codecoverage',
                reportFormats: ['cobertura']
            }
        }

	});

	grunt.loadNpmTasks('grunt-mocha-istanbul');
};
