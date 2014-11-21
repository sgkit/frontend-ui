//synchronised browser testing

var config = require('../config.json').browserSync,
    gulp = require('gulp'),
  notify = require('gulp-notify'),
    browserSync = require('browser-sync');



gulp.task('browser-sync', function () {

    browserSync({
      server: {
        baseDir: config.baseDir
    },
    files: [
      "./*.html",
      "./inc/**.html",
      "./ui/components/**/*.html",
      "./ui/elements/**/*.html",
      "./assets/**/*.css"
    ],
    timestamp: config.timestamp
    })

})

gulp.task('browser-sync:notify',function(){
  gulp.src(config.baseDir + '/index.html')
    .pipe(notify('BROWSER-SYNC : Reloading browser(s)'));
})

gulp.task('browser-sync:reload', function () {
  browserSync.reload();
});
