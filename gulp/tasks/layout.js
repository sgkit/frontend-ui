//handles all your layout task

var gulp = require('gulp'),
    util = require('gulp-util'),
    notify = require('gulp-notify');


gulp.task('layout', ["fileinclude"], function () {

    gulp.src("src/**.html")
        .pipe(notify("Your layout files have been generated"));
});