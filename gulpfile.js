'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const aliases = require('gulp-style-aliases');


function compile() {
  return src('./src/style/theme-source/*.scss')
    .pipe(aliases({
      '~': './node_modules/'
    }))
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./src/style/theme'))
}

function copyfont() {
  return src('./node_modules/element-ui/lib/theme-chalk/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./src/style/fonts'));
}

exports.build = series(compile, copyfont);