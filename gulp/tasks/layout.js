//converts your layouts to full html pages - all your layout task
var config = require("../config.json").layouts;
var gulp = require('gulp'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    fileinclude = require('gulp-file-include');

gulp.task('include_layouts', function () {

    gulp.src(config.src + '**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(config.dest));
});

gulp.task('layout-watch', function () {
    gulp.watch([config.src + '**.html', config.dir + '**.html'], ['layout']);

});

gulp.task('layout', ["include_layouts"], function () {

    gulp.src(config.src + "/index.html")
        .pipe(notify("Your layout files have been generated"));

});