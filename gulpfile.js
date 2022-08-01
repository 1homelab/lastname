const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
  return gulp.src('./scss/**/*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css', { sourcemaps: '.' }))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./assets/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;