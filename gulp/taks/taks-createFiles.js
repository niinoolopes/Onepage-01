const gulp = require('gulp');
const shell = require('gulp-shell');


gulp.task('create-app', shell.task(
    [
        // FOLDERS
        `mkdir "../app" `,
        `mkdir "../app/assets" `,
        `mkdir "../app/assets/images" `,
        `mkdir "../app/assets/icons" `,
        `mkdir "../app/assets/fonts" `,
        `mkdir "../app/assets/scripts" `,
        `mkdir "../app/assets/scripts/src" `,
        `mkdir "../app/assets/styles/scss" `,
        `mkdir "../app/assets/styles/scss/page" `,
        // APP
        `touch "../app/assets/scripts/src/menu.js" `,
        `touch "../app/assets/styles/scss/init.scss" `,
        `touch "../app/assets/styles/scss/page/page.scss" `,
        `touch "../app/assets/styles/scss/page/_header.scss" `,
        `touch "../app/assets/styles/scss/page/_footer.scss" `,
        `touch "../app/index.html" `,
        `touch "../app/sobre.html" `,
        `touch "../app/contato.html" `,
    ]
));