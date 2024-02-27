
import htmlmin from 'gulp-htmlmin'
import connect from 'gulp-connect'
import gulp from 'gulp'
import autoprefixer from 'autoprefixer'
import  postcss  from 'gulp-postcss'

const minifiHTML = async () => {
     gulp.src('Main/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('new'))
}

const prefixer = async () => {
    return gulp.src('Main/**/*.css')
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('new'))
}

const watchFiles = async () => {
    gulp.watch('Main/**/*.html', minifiHTML)
    gulp.watch('Main/**/*.css', prefixer)
}
const startServer  = async () => {
    connect.server({
        root:'Main',
        livereload: true
    });
}

const build = gulp.parallel(startServer, watchFiles)

export{
    startServer,
    build as default,
    minifiHTML,
    watchFiles,
    prefixer,
}




  
