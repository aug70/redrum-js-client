module.exports = function(grunt) {

    grunt.config.set('simplemocha', {
        simplemocha: {
            src: [
                'test/unit/**/*.test.js'],
            options: {
                globals: ['assert'],
                timeout: 50000,
                colors: true,
                ui: 'bdd',
                reporter: 'spec'
            }
        }
	});

	grunt.loadNpmTasks('grunt-simple-mocha');
};
