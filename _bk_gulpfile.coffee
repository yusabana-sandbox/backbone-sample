gulp = require 'gulp'
transform = require 'vinyl-transform'
browserify = require 'browserify'
uglify = require 'gulp-uglify'

gulp.task 'build', ->
  browserified = transform (filename)->
    b = browserify filename
    b.add filename
    return b.bundle


  return gulp.src ['./lib/4/*.js']
    .pipe browserified
    .pipe uglify()
    .pipe gulp.dest('./public/')

gulp.task 'default', ['build']
