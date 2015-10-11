var gulp = require('gulp'),
    // browserSync = require('browser-sync'),
    browserify = require('browserify'),
    transform = require('vinyl-transform');


// Browserify
gulp.task('js', function(){
    // srcから受け取ったファイルをbrowserifyして
    // 返す関数を定義
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        b.add(filename);
        return b.bundle();
    });

    return gulp.src('./lib/4/*.js')
        .pipe(browserified) // ここで指定する
        .pipe(gulp.dest('./public/'));
});
