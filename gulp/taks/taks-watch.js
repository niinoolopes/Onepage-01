const gulp = require('gulp');


gulp.task('watch', () => {
  gulp.watch(`../app/assets/styles/scss/init.scss`, ['styles', 'styles-min']);
  gulp.watch(`../app/assets/scripts/src/**/*.js`, ['scripts', 'scripts-min']);
});