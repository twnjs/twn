var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	browsersync = require('browser-sync'),

	jsFiles = ['js/*.js'];


// Process Scripts
gulp.task('scripts', function () {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('twn.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});
// BrowserSync Task
gulp.task('browsersync', function(cb) {
	browsersync({
		server: {
			baseDir:'./'
		}
	}, cb);
});
// Watch Files For Changes
gulp.task('watch', function () {
	gulp.watch('js/*.js', ['scripts']).on("change", browsersync.reload);
	gulp.watch('*.html').on("change", browsersync.reload);
});
// Default Task
gulp.task('default', ['scripts', 'browsersync','watch']);