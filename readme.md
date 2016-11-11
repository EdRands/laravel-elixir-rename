#Rename Ingredient for Laravel Elixir

**_I am no longer actively using, nor maintaining this project. If there are issues, please make a pull requst if you have a solution._**

This is a simple [gulp-rename](https://www.npmjs.org/package/gulp-rename) wrapper ingredient for Laravel Elixir.

## Installation

`npm install --save-dev laravel-elixir-rename`

## Usage

Add it to your Elixir-enhanced Gulpfile, like so:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-rename');

elixir(function(mix) {
   mix.rename('./bower_components/component/style.css', '_component.scss', './assets/sass');
});
```

This would copy a css file in bower_components and change it to an scss partial in your assets/sass directory.

The parameters are `rename(input, options, output)`

`options` are passed directly to gulp-rename, so you can use what it accepts: strings, 
functions and hashes. To learn more, [see the gulp-rename package](https://www.npmjs.org/package/gulp-rename#readme).

## Bugs and Contributions

If you find a bug, please [post an issue on GitHub](https://github.com/EdRands/laravel-elixir-rename/issues) describing the problem.
Or better yet, make a pull request with the solution.

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
