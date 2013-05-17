module.exports = function (grunt) {
	var banner = '/** \n' +
				' * is.js\n' +
				' * Version: <%= pkg.version %>\n' +
				' * Created by: <%= pkg.author.name %> (rthor)\n' +
				' * URL: <%= pkg.homepage %>\n' +
				' * License: <%= pkg.license %>\n' +
				' */\n';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				banner: banner,
				separator: ''
			},
			dist: {
				files: {
					'jquery/jquery.is.js': ['jquery/src/intro.js', 'jquery/src/nonroot.js', 'src/regexes.js', 'src/test.js', 'jquery/src/outro.js'],
					'vanilla/is.js': ['vanilla/src/intro.js', 'src/regexes.js', 'src/trim.js', 'src/test.js', 'vanilla/src/outro.js']
				}
			}
		},
		uglify: {
			options: {
				banner: banner
			},
			dist: {
				files: {
					'jquery/jquery.is.min.js': 'jquery/jquery.is.js',
					'vanilla/is.min.js': 'vanilla/is.js'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify']);
};