const gulp = require('gulp');

require('./taks/taks-createFiles.js')
require('./taks/taks-css.js')
require('./taks/taks-deploy.js')
require('./taks/taks-javascript.js')
require('./taks/taks-server.js')
require('./taks/taks-watch.js')

gulp.task('default', () => { 
    gulp.start('styles-all')
    gulp.start('scripts-all')
    gulp.start('watch')
})