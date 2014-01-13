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
        jshint: {
            files: ['Gruntfile.js', 'src/check.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
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
        mocha: {
            test: {
                src: ['tests/**/*.test.html']
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
		},
        complexity: {
            generic: {
                src: 'src/check.js',
                options: {
                    errorsOnly: false,
                    cyclomatic: 3,
                    halstead: 8,
                    maintainability: 100
                }
            }
        }
	});

    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-mocha');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'mocha', 'complexity']);
    // Default task(s).
};
