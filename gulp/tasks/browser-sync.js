//synchronised browser testing

var config = require('../config.json').browserSync,
    gulp = require('gulp'),
  notify = require('gulp-notify'),
    browsersync = require('browser-sync');



gulp.task('browser-sync', ['sync-notify'], function () {

    browsersync({
      server: {
        baseDir: config.baseDir,
        index: config.indexPage
    },
    files: [config.files],
    logLevel: config.logLevel,
    timestamp: config.timestamp
    })

})

gulp.task('sync-notify',function(){
  gulp.src(config.baseDir + 'index.html')
    .pipe(notify('BROWSER-SYNC : Reloading browser(s)'));
})
