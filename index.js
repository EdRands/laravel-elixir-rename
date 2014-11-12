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

elixir.extend('rename', function (input, options, output) {

    gulp.task('rename', function () {
        gulp.src(input)
            .pipe(rename(options))
            .pipe(gulp.dest(output));
    });

    return this.queueTask('rename');

});
