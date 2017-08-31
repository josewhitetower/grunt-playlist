module.exports = function(grunt) {
    //Configuration
    grunt.initConfig({
        //pass in options to plugins and references to files, etc
    });


    //Load plugins
    //grunt.loadNpmTasks('');

    //Register Tasks

    grunt.registerTask('run', function() {
        console.log('I am running');
    });
    grunt.registerTask('sleep', function() {
        console.log('I am sleeping');
    });

    grunt.registerTask('all', ['sleep', 'run']);
}