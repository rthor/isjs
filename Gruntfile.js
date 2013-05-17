module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/** \n' +
						' * <%= pkg.name %>\n' +
						' * Created by: <%= pkg.author.name %> (rthor)\n' +
						' * License: <%= pkg.license %>\n' +
						' */\n'
			},
			build: {
				src: 'jquery/jquery.is.js',
				dest: 'jquery/jquery.is.min.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);
};