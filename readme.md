#Rename Ingredient for Laravel Elixir

This is a simple gulp-rename wrapper for Laravel Elixir.

## Usage

Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

var rename = require('laravel-elixir-rename');

elixir(function(mix) {
   mix.rename('./bower_components/component/style.css', '_component.scss', './assets/sass');
});
```

This would copy a css file in bower_components and change it to an scss partial in your assets/sass directory.

The parameters are `rename(input, options, output)`

`options` are passed directly to gulp-rename, so you can use what it accepts: strings, 
functions and hashes. To learn more, 
[see the gulp-rename package](https://www.npmjs.org/package/gulp-rename/).

## Issues

If you find bugs, please [post an issue on GitHub](https://github.com/EdRands/laravel-elixir-rename/issues) describing the problem. Or better yet, 
make a pull request with the solution.

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
