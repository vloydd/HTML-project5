const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


exports.style = style;      
exports.watch = watch; 

    function style()  {
        return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error' ,sass.logError))
        .pipe(gulp.dest('./css/'))
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
        gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    }