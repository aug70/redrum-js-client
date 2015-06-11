module.exports = function (grunt) {

	grunt.registerTask('coverage', [
		'compileAssets',
		'linkAssets',
		'mocha_istanbul:coverage'
	]);

};
