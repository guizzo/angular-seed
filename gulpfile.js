'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./resources/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./resources/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./resources/scss/**/*.scss',['sass']);
});