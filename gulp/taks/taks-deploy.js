const gulp = require('gulp');
const shell = require('gulp-shell');
const plumber = require('gulp-plumber');
const gulpSequence = require('gulp-sequence').use(gulp);


gulp.task('deploy', () => {
  gulp.run(
    gulpSequence( 
      'copy-images',
      'copy-icons',
      'copy-fonts',
      'copy-scripts',
      'copy-styles',
      'copy-html'
    )
  );
})

gulp.task('create-deploy',
  shell.task(
    [
      `mkdir "../docs" `,
      `mkdir "../docs/assets" `,
      `mkdir "../docs/assets/images" `,
      `mkdir "../docs/assets/icons" `,
      `mkdir "../docs/assets/fonts" `,
      `mkdir "../docs/assets/scripts" `,
      `mkdir "../docs/assets/styles" `,
    ]
  )
);

gulp.task('copy-images', () => {
  gulp.src(`../app/assets/images/*.*`)
    .pipe(plumber())
    .pipe(gulp.dest(`../docs/assets/images`))
})

gulp.task('copy-icons', () => {
  gulp.src(`../app/assets/icons/*.*`)
    .pipe(plumber())
    .pipe(gulp.dest(`../docs/assets/icons`))
})

gulp.task('copy-fonts', () => {
  gulp.src(`../app/assets/fonts/*.*`)
    .pipe(plumber())
    .pipe(gulp.dest(`../docs/assets/fonts`))
})

gulp.task('copy-styles', () => {
  gulp.src(`../app/assets/styles/*-min.css`)
    .pipe(plumber())
    .pipe(gulp.dest(`../docs/assets/styles`))
})

gulp.task('copy-scripts', () => {
  gulp.src(`../app/assets/scripts/*-min.js`)
    .pipe(plumber())
    .pipe(gulp.dest(`../docs/assets/scripts`))
})

gulp.task('copy-html', () => {
  gulp.src(`../app/*.html`)
    .pipe(plumber())
    .pipe(gulp.dest(`../docs/`))
})