module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
        expand: true,
        cwd: 'app/scss',
        src: ['**/*.scss'],
        dest: 'dist/css',
        ext: '.css'
      }]
            }
        },
        pug: {
            compile: {
                options: {
                    pretty: true
                },
                files: {
                    'dist/index.html': ['app/index.pug']
                }
            }
        },
        copy: {
            img: {
                expand: true,
                cwd: 'app/img/', 
                src: ['**'],
                dest: 'dist/img/',
            }
        },
        watch: {
            pug: {
                files: ['app/**/*.pug'],
                tasks: ['pug']
             }
            // sass: {
            //     files: ['app/scss/*.scss'],
            //     tasks: ['sass']
            // }
        }
    });
    grunt.registerTask('dev', [
        'pug',
        'sass',
        'copy',
        'watch'
    ]);
}