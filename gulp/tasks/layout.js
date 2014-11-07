//converts your layouts to full html pages - all your layout task
var config = require("../config.json").layouts;
var gulp = require('gulp'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    watch = require('watchify');




gulp.task('layout-watch', function () {
    gulp.watch([config.dir + '**.html', config.dir + '**.html'], ['layout']);

});

gulp.task('layout', ["fileinclude"], function () {

    gulp.src("src/index.html")
        .pipe(notify("Your layout files have been generated"));

});