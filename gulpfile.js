// Helpful links
// https://www.one-tab.com/page/Yn1zOtOmTwGswSlXN99JYA
// https://www.one-tab.com/page/27859NuwSneCN6BDL8dYuw

"use strict";

const { src, dest, parallel, series, watch } = require('gulp');
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

////////////////
//   Tasks    //
////////////////

// SASS
function scss() {
	console.log("Compiling SCSS");
	return src(STYLES_PATH)
		.pipe(plumber( function(err) {
			console.log('Styles task error: '+ err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'uncompressed'
		}))
		.pipe(gulp_autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(dest(DEST_PATH))
}

// Clean
function clean() {
	console.log("Cleaning up /dist directory...");
	return del([DEST_PATH])
}

// Watch
function watchCSS(done) {
	console.log("Watching files for changes...");
	require('./server.js');
	livereload.listen();
	watch('public/scss/**\/*.scss', scss);
	done();
}

////////////////
//  Exports   //
////////////////
exports.build = series(clean, scss, watchCSS);
exports.watch = watchCSS;
exports.clean = clean;
exports.scss = scss;