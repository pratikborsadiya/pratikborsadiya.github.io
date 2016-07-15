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
			jade: {
				files: ['jade/**/*.jade'],
				tasks: ['jade']
			}
		},
		jade: {
			compile: {
				options: {
					pretty: false
				},
				files: [{
					src: ['**/*.jade', '!**/_*.jade'],
					dest: "./",
					ext: ".html",
					cwd: "jade/",
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
				browsers: ['last 2 versions', 'ie 8', 'ie 9'],
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
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-sass');
};
