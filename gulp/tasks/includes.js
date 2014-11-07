var gulp = require('gulp'),
    include = require('gulp-htmlincluder');

gulp.task('include', function () {

    gulp.src('./src/index.html')
        .pipe(include())
        .pipe(gulp.dest('./src'));
});