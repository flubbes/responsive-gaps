"use strict";

var gulp = require('gulp');
var scssCompiler = require('gulp-sass');

gulp.task('scss', function () {
    return gulp.src('./src/main.scss').pipe(scssCompiler()).pipe(gulp.dest('./dist/css'));
});