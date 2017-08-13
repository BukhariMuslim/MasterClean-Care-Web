const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/index.js', 'public/js')
  .extract([
    'react',
    'react-dom',
    'react-intl',
    'react-material-ui-form-validator',
    'react-number-format',
    'react-redux',
    'react-redux-form',
    'react-router',
    'react-router-dom',
    'react-router-redux',
    'react-slick',
    'react-tap-event-plugin',
    'redux',
    'redux-form',
    'redux-thunk',
  ])
  .sass('resources/assets/sass/materialize.scss', 'public/css')
  .sass('resources/assets/sass/default.scss', 'public/css')
  .webpackConfig({
    output: {
      chunkFilename: `chunks/[name]${mix.config.inProduction ? '.[chunkhash].chunk.js' : '.chunk.js'}`,
      publicPath: '/',
    },
  });
