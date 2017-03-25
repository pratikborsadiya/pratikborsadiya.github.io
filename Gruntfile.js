module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
                livereload: true
            },
			scss: {
				files: ['sass/*.sass', 'sass/**/*.sass'],
				tasks: ['sass', 'autoprefixer']
			},
			pug: {
				files: ['pug/**/*.pug'],
				tasks: ['pug']
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
		sass: {
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'sass/',
					src: ['*.sass'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 11'],
				safe: true,
				map: false
			},
			dist: {
				src: ['css/home.css', 'css/blog.css']
			}
		}
	});

	// Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['sass', 'pug', 'autoprefixer']);
};
