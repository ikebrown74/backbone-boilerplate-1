/*
* npm install -g grunt
*/
module.exports = function(grunt) {
    grunt.initConfig({
        min: {
            dist: {
                src: ['js/**/*.js'],
                dest:'js/main.min.js'
            }
        }
    });
};