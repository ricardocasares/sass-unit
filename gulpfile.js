const gulp = require('gulp-help')(require('gulp'));
const test = require('gulp-mocha');
const sass = require('gulp-sass');
const taskSass = (opts) => gulp
    .src(opts.src)
    .pipe(sass(opts.config))
    .pipe(gulp.dest(opts.dst));
const taskTest = (opts) => gulp
    .src(opts.src)
    .pipe(test(opts.config));

gulp.task('sass', 'Compile your sass sources', () => taskSass({
    src: 'src/awesome.scss',
    dst: 'dist',
    config: {}
}));

gulp.task('test', 'Run unit tests', () => taskTest({
    src: 'src/**/*.spec.js',
    config: {}
}));