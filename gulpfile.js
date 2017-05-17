"use strict";

var gulp = require('gulp');
var scss = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('transpile:scss', function () {
    return gulp.src('./src/main.scss', {})
        .pipe(rename('responsive-gaps'))
        .pipe(scss()).pipe(gulp.dest('./dist/css'));
});

gulp.task('minify:css', ['transpile:scss'], function () {
    gulp.src('./dist/css/responsive-gaps.css')
        .pipe(cleanCss())
        .pipe(rename('responsive-gaps.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', ['minify:css']);

gulp.task('default', ['build']);