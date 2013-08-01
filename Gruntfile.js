module.exports = function (grunt) {
	var banner = '/** \n' +
				' * is.js - v<%= pkg.version %>\n' +
				' * <%= pkg.description %>\n' +
				' * <%= pkg.homepage %>\n' +
				' *\n' +
				' * Licensed under the MIT license.\n' +
				' * Copyright (c) 2013 <%= pkg.author.name %>\n' +
				' * <%= pkg.author.url %>\n' +
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
					'jquery/jquery.is.js': [
						'jquery/src/intro.js',
						'jquery/src/nonroot.js',
						'src/deep.js',
						'src/check.js',
						'src/return.js',
						'jquery/src/outro.js'
					],
					'vanilla/is.js': [
						'vanilla/src/intro.js',
						'src/deep.js',
						'src/check.js',
						'src/trim.js',
						'src/return.js',
						'vanilla/src/outro.js'
					],
					'nodejs/is.js': [
						'nodejs/src/intro.js',
						'src/deep.js',
						'src/check.js',
						'src/trim.js',
						'src/return.js',
						'nodejs/src/outro.js'
					]
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