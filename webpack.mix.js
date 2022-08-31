const mix = require('laravel-mix');
mix.js('src/content.js', 'build')
    .js('src/background.js', 'build')
    .js('src/popup.js', 'build')
    .copy('src/manifest.json', 'build/manifest.json')
    .copy('src/popup.html', 'build/popup.html')
    .copyDirectory('public/images', 'build/images');
