// Packages
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var gulp_autoprefixer = require('gulp-autoprefixer');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var del = require('del');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');

// Paths
var DEST_PATH = 'public/dist';
var STYLES_PATH = 'public/scss/main.scss';

////////////////
//   Tasks    //
////////////////

// SASS
gulp.task('scss', function() {
	console.log("Compiling SCSS...");
	return gulp.src(STYLES_PATH)
		.pipe(plumber( function(err) {
			console.log('Styles task error: '+ err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		// Compile scss THEN autoprefix!
		.pipe(sass({
			outputStyle: 'uncompressed'
		}))
		.pipe(gulp_autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DEST_PATH))
});

gulp.task('clean', function() {
	console.log("Cleaning up /dist directory...");
	return del.sync([DEST_PATH])
})

// Watch
gulp.task('watch', ['scss'], function() {
	console.log("Watching files for changes...");
	require('./server.js');
	livereload.listen();
	gulp.watch('public/scss/**/*.scss', ['scss']);
})

// Default
gulp.task('default', ['clean', 'scss'], function() {
	console.log('Running default task...')
})