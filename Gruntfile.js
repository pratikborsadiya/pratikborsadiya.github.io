module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: true
			},
			scss: {
				files: ['**/*.sass', '**/*.scss'],
				tasks: ['sass', 'postcss']
			},
			pug: {
				files: ['**/*.pug'],
				tasks: ['pug']
			}
		},
		sass: {
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: false
				},
				files: [{
					expand: true,
					cwd: 'sass/',
					src: ['*.sass'],
					dest: 'css/',
					ext: '.css'
				}]
			},
			blog: {
				options: {
					outputStyle: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'blog/',
					src: ['**/*.sass', '**/*.scss'],
					dest: 'blog/',
					ext: '.css'
				}]
			}
		},
		pug: {
			compile: {
				options: {
					pretty: false
				},
				files: [{
					src: ['**/*.pug', '!**/_*.pug'],
					dest: "./",
					ext: ".html",
					cwd: "pug/",
					expand: true
				}]
			}
		},
		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')({browsers: 'last 3 versions'})
				]
			},
			dist: {
				src: ['css/home.css', 'css/blog.css']
			}
		}
	});

	// Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['sass', 'pug', 'postcss']);
};
