const gulp            = require('gulp');
const browserSync     = require('browser-sync').create();
const concat          = require('gulp-concat');
const sass            = require('gulp-sass');
const autoprefixer    = require('gulp-autoprefixer');
const babel           = require('gulp-babel');
const uglify          = require('gulp-uglify');

const root = 'docs';
const structure = {
    allFile_html: '**/*.html', 
}
const css = {
    name: 'estilo.css',
    name_min: 'estilo-min.css',
    past: 'styles',
    src: 'scss',
    allFile: '**/*.scss', 
}
const javascript = {
    name: 'main.js',
    name_min: 'main-min.js',
    past: 'scripts',
    src: 'src',
    allFile: '**/*.js',
}

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: root,
        }
    });
});

gulp.task('styles-min', function () {
    gulp.src(`${root}/${css.past}/${css.src}/init.scss`)
        .pipe(concat(`${css.name_min}`))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(gulp.dest(`${root}/${css.past}`))
    console.log(`${css.name} OK`)
});

gulp.task('styles', function () {
    gulp.src(`${root}/${css.past}/${css.src}/init.scss`)
        .pipe(concat(`${css.name}`))
        .pipe(sass())
        .pipe(gulp.dest(`${root}/${css.past}`))
    console.log(`${css.name} OK`);
});

gulp.task('scripts-min', function () {
    gulp.src(`${root}/${javascript.past}/${javascript.src}/${javascript.allFile}`)
        .pipe(concat(`${javascript.name_min}`))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(`${root}/${javascript.past}`))
    console.log(`${javascript.name} OK`)
});

gulp.task('scripts', function () {
    gulp.src(`${root}/${javascript.past}/${javascript.src}/${javascript.allFile}`)
        .pipe(concat(`${javascript.name}`))
        .pipe(gulp.dest(`${root}/${javascript.past}`))
    console.log(`${javascript.name} OK`)
});

gulp.task('watch', function () {
    gulp.watch(`${root}/${css.past}/${css.src}/${css.allFile}`, ['styles', 'styles-min']).on('change', browserSync.reload);
    gulp.watch(`${root}/${javascript.past}/${javascript.src}/${javascript.allFile}`, ['scripts', 'scripts-min']).on('change', browserSync.reload);
    gulp.watch(`${root}/${structure.allFile_html}`).on('change', browserSync.reload);
});

gulp.task('default', () => {
    gulp.run('serve','styles', 'styles-min', 'scripts', 'scripts-min','watch');
});