module.exports = function (grunt) {
//var grunt=require('grunt')
// Project configuration.
    grunt.initConfig({

        forever: {
            options: {
                index: 'app.js',
                logDir: './log',
                logFile: 'app.log',
                errFile: 'err.log'
            }
        }
    });

// Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-forever');

// Default task(s).
    grunt.registerTask('default', ['forever']);
    grunt.registerTask('run', ['forever:restart']);

};
