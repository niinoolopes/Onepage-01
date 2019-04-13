const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('styles-all', () => {
  gulp.start('styles','styles-min')
})

gulp.task('styles-min', () => {
  gulp.src(`../app/assets/styles/scss/init.scss`)
    .pipe(concat(`styles-min.css`))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(gulp.dest(`../app/assets/styles/`))
  console.log(`styles-min OK !!`)
});

gulp.task('styles', () => {
  gulp.src(`../app/assets/styles/scss/init.scss`)
    .pipe(concat(`styles.css`))
    .pipe(sass())
    .pipe(gulp.dest(`../app/assets/styles/`))
  console.log(`styles OK !!`);
});