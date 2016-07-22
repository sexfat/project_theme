module.exports = function(grunt) {
  grunt.initConfig({

    //jade
    // jade: {
    //     compile: {
    //         options: {
    //             client: false,
    //             pretty: true
    //         },
    //         files: [ {
    //           cwd: 'views/htmls',
    //           src: '*.jade',
    //           dest: 'views/',
    //           expand: true,
    //           ext: 'main.html'
    //         } ]
    //     }
    // },

    // jade: {
    //   compile: {
    //     options: {
    //       data: {
    //         debug: false
    //       }
    //     },
    //     files: {
    //       "views/main.html": ["views/htmls/*.jade"]
    //     }
    //   }
    // },

    //watch
    watch: {
      css: {
        files: ['sass/*.scss', 'sass/**/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['*.html']
      },
      js: {
        files: ['js/*.js']
      }
    },
    //sass
    sass: {
      build: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'sass/views/',
          src: ['*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },
    //jshint
    jshint: {
      all: {
        src: ['libs/*.js', 'js/*.js'],
      },
    },

    //  browserSync
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './',
            index: 'index.html'
          }
        }
      }
    },


    clean: {
      folder: {
        src: ["./online/*.zip"]
      }
    },

    // browserify
    // browserify: {
    //       build: {
    //         src: 'views/js/learnjs.js',
    //         dest: 'views/js/output.js',
    //         // expand: true,
    //         // cwd: 'views/js/',
    //         // src: 'bundle.js',
    //         // dest: 'views/js/'
    //       }
    // }
    //打包上線用
    compress: {
      main: {
        options: {
          archive: function() {
            return 'online/' + 'project' + (new Date()).getDate() + (new Date()).getHours() + (new Date()).getMinutes() + '.zip'
          }
        },
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css'],
          dest: 'css/'
        }, {
          expand: true,
          cwd: 'images/',
          src: ['*'],
          dest: 'images/'
        }, {
          expand: true,
          cwd: './',
          src: ['*.html'],
          dest: '/'
        }, {
          expand: true,
          cwd: 'js/',
          src: ['*.js'],
          dest: 'js/'
        }]
      }
    },

  });

  // load npm tasks

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // define default task
  // grunt.registerTask('default', ['browserSync','browserify', 'watch', 'jade', 'jshint']);
  grunt.registerTask('default', [ 'clean','browserSync', 'watch']);
  // 給壓縮上線用 zip task
  grunt.registerTask('zips', ['compress']);
};
