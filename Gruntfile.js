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
                src: ['css/*.css'],
                dest: 'build/styles.css'
            }
        }

    });


    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Register Tasks

    grunt.registerTask('concat-js', ['concat:js']);

    grunt.registerTask('concat-css', ['concat:css']);

    // grunt.registerTask('run', function() {
    //     console.log('I am running');
    // });
    // grunt.registerTask('sleep', function() {
    //     console.log('I am sleeping');
    // });

    // grunt.registerTask('all', ['sleep', 'run']);
}