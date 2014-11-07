// @@include('./view.html')
//  @@include('./var.html', {
//    "name": "haoxin",
//    "age": 12345
//  })

var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    print = require('gulp-print');

gulp.task('fileinclude', function () {

    gulp.src('./src/layouts/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./src/'));
});