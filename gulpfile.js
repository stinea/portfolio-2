
// Require modules
var gulp = require('gulp'), // Gulp
    sass = require('gulp-sass'), // Sass compiler
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}
   
gulp.task('styles', function () {
    gulp.src(['./app/sass/*.scss', './app/sass/**/*.scss'])
    .pipe(plumber())
    .pipe(sass())
    .on('error', errorLog)
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(livereload());
   
});


// Watch task
gulp.task('watch', function () {

	var server = livereload();

    gulp.watch('./app/sass/*.scss', ['styles'])   
    
});

// Run all the default tasks
gulp.task('default', ['styles', 'watch']);
