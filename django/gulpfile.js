//===
// IMPORTS
//===
const { series, parallel, src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

//===
// VARIABLES
//===
const SRC_PATH = 'static';
const DEST_PATH = 'static';

//===
// TASKS
//===

// Static server with reload
function initBrowserSync(cb) {
    browserSync.init({
        notify: false,
        open: false,
        proxy: 'http://guitarlions.localhost'
    });
    return cb;
}

// Compile SASS + sourcemaps
function sassCompile(cb) {
    return src(SRC_PATH + '/sass/guitarlions.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(DEST_PATH + '/css/'))
        .pipe(browserSync.stream()) ;
}

//===
// Commands
//===

const build = parallel(sassCompile);

// gulp dev
exports.dev = function () {
    build();
    watch([SRC_PATH + '/sass/*.sass', SRC_PATH + '/sass/**/*.sass'], sassCompile);
    initBrowserSync();
}

// gulp
exports.default = build;
