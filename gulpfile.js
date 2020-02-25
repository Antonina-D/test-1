'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const rigger = require('gulp-rigger');

const path = {
  src: {
    html: 'src/*.html',
    js: 'src/js/script.js',
    style: 'src/styles/style.scss',
  },
  build: {
    html: 'build/',
    js: 'build/js/',
    style: 'build/css/',
  },
  watch: {
    html: 'src/*.html',
    js: 'src/js/**/*.js',
    style: 'src/styles/**/*.scss',
  },
  clean: 'build'
};

gulp.task('html', function () {
    return gulp.src(path.src.html)
      .pipe(rigger())
      .pipe(gulp.dest(path.build.html));
});

gulp.task('sass', function () {
  return gulp.src(path.src.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 3 versions']
    }))
    .pipe(gulp.dest(path.build.style));
});

gulp.task('js', function () {
    return gulp.src(path.src.js)
      .pipe(rigger())
      .pipe(gulp.dest(path.build.js));
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('html', 'sass', 'js'))
);

gulp.task('watch', function() {
  gulp.watch(path.watch.html, gulp.series('html'));
  gulp.watch(path.watch.style, gulp.series('sass'));
  gulp.watch(path.watch.js, gulp.series('js'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'build'
  });
  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
  'build',
  gulp.parallel('watch', 'serve'))
);



