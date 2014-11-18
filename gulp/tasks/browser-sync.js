//synchronised browser testing

var config = require('../config.json').browserSync,
    gulp = require('gulp'),
    browsersync = require('browser-sync');



gulp.task('browser-sync', function () {

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
