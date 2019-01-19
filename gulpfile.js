// require packages
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    maps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    del = require('del'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    gIf = require('gulp-if');
var cache = require('gulp-cache');
var imageminPngquant = require('imagemin-pngquant');
var imageminZopfli = require('imagemin-zopfli');
var imageminMozjpeg = require('imagemin-mozjpeg'); //need to run 'brew install libpng'
var imageminGiflossy = require('imagemin-giflossy');

// define isProd
const isProd = false;

// define paths
const paths = {
    root: {
        src: 'src',
        dest: 'app'
    },
    html: {
        src: 'src/*.html',
        dest: 'app'
    },
    styles: {
        src: 'src/scss/*.scss',
        dest: 'app/styles/'
    },
    scripts: {
        src: 'src/js/*.js',
        dest: 'app/scripts/'
    },
    images: {
        src: 'src/images/*.{jpg,jpeg,png}',
        dest: 'app/images/'
    }
};

// define tasks
/*function clean() {
    return del(['app']);
}*/

function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(connect.reload());
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(gIf(!isProd, maps.init()))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            grid: "autoplace"
        }))
        .pipe(cleancss())
        .pipe(gIf(!isProd, maps.write()))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(connect.reload());
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gIf(isProd, uglify()))
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(connect.reload());
}

function images() {
    return gulp.src(paths.images.src, {since: gulp.lastRun(images)})
        .pipe(cache(imagemin([
            //png
            imageminPngquant({
                speed: 1
            }),
            imageminZopfli({
                more: true
                // iterations: 50 // very slow but more effective
            }),
            //gif
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3, //keep-empty: Preserve empty transparent frames
                lossy: 2
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 90
            })
        ])))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(connect.reload());
}

function serve() {
    connect.server({
        root: paths.root.dest,
        livereload: true
    });
}

function watch() {
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

gulp.task('default', gulp.series(gulp.parallel(html, styles, scripts, images, serve, watch)));
