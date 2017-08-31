module.exports = function(grunt) {
    //Configuration
    //pass in options to plugins and references to files, etc
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/script.js'
            },
            css: {
                src: ['css/reset.css', 'css/bootstrap.css', '/css/styles.css'],
                dest: 'build/styles.css'
            }
        },
        sass: {
            build: {
                files: [{
                    src: 'css/sass/styles.scss',
                    dest: 'css/styles.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    src: 'build/script.js',
                    dest: 'build/script.min.js'
                }]

            }
        }

    });


    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');

    //Register Tasks

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);


    grunt.registerTask('')

    // grunt.registerTask('run', function() {
    //     console.log('I am running');
    // });
    // grunt.registerTask('sleep', function() {
    //     console.log('I am sleeping');
    // });

    // grunt.registerTask('all', ['sleep', 'run']);
}