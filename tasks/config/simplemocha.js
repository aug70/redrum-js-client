module.exports = function(grunt) {

	grunt.config.set('simplemocha', {
		simplemocha: {
            options: {
                globals: ['assert'],
                timeout: 5000,
                recursive: true,
                colors: true,
                ui: 'bdd',
                reporter: 'spec'
            },
            all: { src: ['test/*.js'] }
        }
	});

	grunt.loadNpmTasks('grunt-simple-mocha');
};
