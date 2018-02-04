module.exports = function(grunt){


    grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),


		responsive_images: {
		  dev: {
			options: {
			  engine: 'im',
			  sizes: [

				{
				  name:'quantamsmall',
				  width: 80,
				},
				{
				  name:'microsmall',
				  width: 120,
				},
				{
				  name: 'extrasmall',
				  width: 240,
				},
				{
				  name:'small',
				  width: 500,
				},
				{
				  name:'medium',
				  width: 980,
				},
			  	{
				  name:'large',
				  width: 1200,
				}]
			},

			/*
			You don't need to change this part if you don't change
			the directory structure.
			*/
			files: [{
			  expand: true,
			  src: ['*.{gif,jpg,png}'],
			  cwd: 'shoestore-app/images/',
			  dest: 'shoestore-app/dist/images/'
			}]
		  }
		},

		/* Clear out the images directory if it exists */
		clean: {
		  dev: {
			src: ['images'],
		  },
		},

		/* Generate the images directory if it is missing */
		mkdir: {
		  dev: {
			options: {
			  create: ['images']
			},
		  },
		},


		htmlmin: {                                     // Task
			dist: {                                      // Target
			  options: {                                 // Target options
				removeComments: true,
				collapseWhitespace: true
			  },
			  files: {                                   // Dictionary of files
				'shoestore-app/dist/index.html': 'shoestore-app/index.html',     // 'destination': 'source'
				'shoestore-app/dist/all_products.html': 'shoestore-app/all_products.html',
				'shoestore-app/dist/contact_us.html': 'shoestore-app/contact_us.html',
				'shoestore-app/dist/faqs.html': 'shoestore-app/faqs.html',
				'shoestore-app/dist/new_products.html': 'shoestore-app/new_products.html',
				'shoestore-app/dist/specials.html': 'shoestore-app/specials.html',
				'shoestore-app/dist/500.html': 'shoestore-app/error/500.html',
				'shoestore-app/dist/404.html': 'shoestore-app/error/404.html',
				'shoestore-app/dist/401.html': 'shoestore-app/error/401.html',
        'shoestore-app/dist/403.html': 'shoestore-app/error/403.html',

			  }
			}
		  },

		/**
         * Concat
         */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['shoestore-app/js/**/*.js'],
                dest: 'shoestore-app/js/<%= pkg.name %>.js'
            }
        },

        /**
         * Uglify
         */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },

			my_target: {
			  files: {
				'shoestore-app/dist/shoestore-app.min.js': ['shoestore-app/js/custom.js', 'shoestore-app/js/pagination.js', 'shoestore-app/js/paging.js']
			  }
			},


        },

		/**
		 * sass Task
		 */
        sass:{

                dev:{
                    options:{
                            style:"expanded",
                            sourcemap:'auto'
                    },

                    files:{
                            'shoestore-app/style.css':'shoestore-app/css/style.scss'
                            /*where file goes-----/where file from*/
                    }
                },

                    dist:{
                        options:{
                                style:"compressed",
                                sourcemap:'auto'
                        },
                        files:{
                            'shoestore-app/dist/style-min.css':'shoestore-app/css/style.scss'
                                /*where file goes-----/where file from*/
                        }
                    }
                },

         /**
         * QUnit
         */

        qunit: {
            files: ['test/**/*.html']
        },

        /**
         * JS Hint
         */
        jshint: {
            files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults

                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        /**
         * watch
         */
		watch:{

                css:{
                        files:'shoestore-app/**/*.scss',
                        tasks:['sass', 'jshint', 'htmlmin', 'uglify', 'concat', 'responsive_images' ]
                }
            }


    });

grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-mkdir');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('test', ['jshint', 'qunit']);

grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'clean', 'mkdir', 'htmlmin']);
grunt.registerTask('default', ['sass', 'watch' ,'responsive_images']);




};

/* add bag (!) to wordpress css theme top-title so that it shows on minified file*/
