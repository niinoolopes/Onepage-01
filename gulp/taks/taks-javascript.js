const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


gulp.task('scripts-all', () => {
    gulp.start('scripts', 'scripts-min')
})

gulp.task('scripts-min', () => {
    gulp.src(`../app/assets/scripts/src/**/*.js`)
        .pipe(concat(`scripts-min.js`))
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(gulp.dest(`../app/assets/scripts`))
    console.log(`scripts-min OK!`)
});

gulp.task('scripts', () => {
    gulp.src(`../app/assets/scripts/src/**/*.js`)
        .pipe(concat(`scripts.js`))
        .pipe(gulp.dest(`../app/assets/scripts`))
    console.log(`scripts OK!`)
});