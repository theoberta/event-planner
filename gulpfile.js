var gulp = require('gulp');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var beautify = require('gulp-beautify');
var cssbeautify = require('gulp-cssbeautify');


gulp.task('beautify', function() {
  gulp.src('src/*')
    .pipe(gulpIf('*.js', beautify({indentSize: 4})))
    .pipe(gulpIf('*.css', cssbeautify()))
    .pipe(gulp.dest('src'))
});

gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
		.pipe(clean());
});

gulp.task('minify', function() {
	return gulp.src(['src/*','src/**/*'])
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
	.pipe(gulp.dest('dist'));
});

gulp.task('vendors', function() {
	return gulp.src('src/vendors/*')
	.pipe(gulp.dest('dist/vendors'))
});

gulp.task('minifyJS', function() {
	return gulp.src('src/js/*.js')
	.pipe(uglify().on('error', gutil.log))
	.pipe(gulp.dest('dist/js'))
});

gulp.task('dist', ['minify','minifyJS','vendors']);