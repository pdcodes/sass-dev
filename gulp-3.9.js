// Packages
const gulp = require('gulp');
/*
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const gulp_autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const del = require('del');
const livereload = require('gulp-livereload');

// Paths
const DEST_PATH = 'public/dist';
const STYLES_PATH = 'public/scss/main.scss';

*/

////////////////
//   Tasks    //
////////////////

// SASS
/*
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
	gulp.watch('public/scss/**\/*.scss', ['scss']);
})

// Default
gulp.task('default', gulp.series('clean', 'scss'], function() {
	console.log('Running default task...')
} */