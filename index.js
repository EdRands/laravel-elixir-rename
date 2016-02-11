var gulp = require('gulp');
var elixir = require('laravel-elixir');
var rename = require('gulp-rename');

/*
 |----------------------------------------------------------------
 | Rename Files
 |----------------------------------------------------------------
 |
 | A wrapper for gulp-rename. Makes renaming files easy.
 |
 */

var Task = elixir.Task;

elixir.extend('rename', function (input, options, output) {

    new Task('rename', function () {
        return gulp.src(input)
            .pipe(rename(options))
            .pipe(gulp.dest(output));
    });

});

