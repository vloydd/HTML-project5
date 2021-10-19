const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


exports.style = style;      
exports.watch = watch; 

    function style()  {
        return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error' ,sass.logError))
        .pipe(gulp.dest('./css/'))
    }   
    function watch() {
        gulp.watch('./scss/**/*.scss', style);
    }