module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.config.js',
                autoWatch: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
};