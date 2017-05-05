var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');


gulp.task('default', function () {
  return gulp.src('css/**/*.css') // путь к папке с файлами
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('app/'));
});

gulp.task('minify-css', function() {
  return gulp.src('app/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.css', ['default']);
});



