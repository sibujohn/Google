var gulp            = require('gulp'); // Gulp core package
var include         = require('gulp-include');
var sourcemaps      = require('gulp-sourcemaps');
var notify          = require("gulp-notify");
var rename          = require('gulp-rename');
var htmlreplace     = require('gulp-html-replace');
var uglify          = require('gulp-uglify');

var srcPath         = 'src/'; // Path to source files
var distPath        = 'dist/'; // Path to distribution files

// Files/Paths that need to be watched by gulp
var watchPaths    = {
    config_js: [
        srcPath+'config/*.js'
    ],
    modules_js:     [
        srcPath+'modules/*/*.js'
    ],
    index_html:          [
        srcPath+'*.html'
    ],
    modules_html:          [
        srcPath+'modules/*/*.html'
    ]
};
// HTML task
gulp.task('index-html', function () {
    gulp
        .src(watchPaths.index_html)
        .pipe(include())
        .pipe(htmlreplace({
            'js': 'js'
        }))
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running html task" }))
        .pipe(gulp.dest(distPath));
});
gulp.task('modules-html', function () {
    gulp
        .src(watchPaths.modules_html)
        .pipe(include())
        .pipe(htmlreplace({
            'js': 'js'
        }))
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running html task" }))
        .pipe(gulp.dest(distPath + 'modules'));
});
// Javscript task
gulp.task('config-scripts', function(){
    gulp
        .src(watchPaths.config_js)
        .pipe(include())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running scripts task" }))
        .pipe(rename({ suffix: ''}))
        // .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(distPath + 'config'));
});
gulp.task('modules-scripts', function(){
    gulp
        .src(watchPaths.modules_js)
        .pipe(include())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running scripts task" }))
        .pipe(rename({ suffix: ''}))
        // .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(distPath + 'modules'));
});

// // The watch task will be executed upon each file change
// gulp.task('watch', function() {
//     gulp.watch(watchPaths.html, ['html']);
//     gulp.watch(watchPaths.config_js, ['config-scripts']);
//     gulp.watch(watchPaths.modules_js, ['modules-scripts']);
// });

// Default task is executed upon execution of gulp
gulp.task('default', ['index-html', 'modules-html', 'config-scripts', 'modules-scripts']);
// gulp.task('default', ['scripts', 'html']);
