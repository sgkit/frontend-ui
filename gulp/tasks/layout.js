//converts your layouts to full html pages - all your layout task
var config = require('../config.json').layouts;
var gulp = require('gulp'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    watch = require('watchify');



<<<<<<< HEAD
=======
    gulp.src(config.src + config.srcFiles, {
        base: config.src
    })
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(config.dest));
});
>>>>>>> develop

gulp.task('layout-watch', function () {
    gulp.watch([config.dir + '**.html', config.inc_dir + '**/*.html'], ['layout']);

});

<<<<<<< HEAD
gulp.task('layout', ["fileinclude"], function () {

    gulp.src("src/index.html")
        .pipe(notify("Your layout files have been generated"));
=======
gulp.task('layout', ['include_layouts'], function () {
>>>>>>> develop

    gulp.src(config.src + '/index.html')
        .pipe(notify('Your layout files have been generated'));
});