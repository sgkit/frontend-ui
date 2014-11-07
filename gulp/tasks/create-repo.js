//Build a new deploy repo for your application application
//Goto the config file and create your settings

var gulp = require("gulp"),
    util = require("gulp-util");
var config = require('gulp/config.json');


gulp.task("create-repo", function () {

    util.log(config.src);
    util.beep();

});
src