var pkg      = require('./package.json'),
    dirs     = pkg._directories,
    bem      = require('bem').api,
    gulp     = require('gulp'),
    gif      = require('gulp-if'),
    csso     = require('gulp-csso'),
    concat   = require('gulp-concat'),
    notify   = require('gulp-notify'),
    rename   = require('gulp-rename'),
    path     = require('path'),
    join     = path.join,

    PLATFORM = 'desktop',      // folders with bundles
    ASSETS   = 'assets',       // merged bundle name, united css ans js
    ANAME    = 'application',  // assets filename for minified css and js
    VNAME    = 'plugins',      // vendors filename for minified css and js

    APATH     = join(PLATFORM + '.bundles', ASSETS),
    ACSS      = join(APATH, '_' + ASSETS + '.css'),
    AJS       = join(APATH, '_' + ASSETS + '.js'),
    BUNDLES   = ['index'].map(function(bundle){ return join(PLATFORM + '.bundles', bundle, bundle + '.html')}),
    TEMPLATES = [
        {
            module: 'system',
            templates: ['index']
        }
    ],

    PCSS     = join(dirs.public, dirs.styles),
    PJS      = join(dirs.public, dirs.scripts),

    V        = pkg.version,
    DNAME    = pkg.name + '_v' + V;

gulp.task('styles', function() {
    gulp.src(ACSS)
        .pipe(csso())
        .pipe(rename(ANAME + '.min.css'))
        .pipe(gulp.dest(PCSS));
});

gulp.task('plugins', function() {
    gulp.src(AJS)
        .pipe(rename(VNAME + '.min.js'))
        .pipe(gulp.dest(PJS))
});

gulp.task('bundles', function(){
    gulp.src(BUNDLES)
        .pipe(gulp.dest(dirs.public));
});

gulp.task('application', function() {

    // Uncomment this if you want use AngularJS MVC
    // gulp.src([
    //         join(dirs.app, 'init.js'),
    //         join(dirs.app, '**', '*.js'),
    //         join(dirs.app, '**', 'routes', '*.js'),
    //         join(dirs.app, '**', 'services', '*.js'),
    //         join(dirs.app, '**', 'directives', '*.js'),
    //         join(dirs.app, '**', 'controllers', '*.js')
    //     ])
    //     .pipe(concat(ANAME + '.min.js'))
    //     .pipe(gulp.dest(PJS));
});

gulp.task('templates', function(){

    // Uncomment this if you want use AngularJS MVC
    // TEMPLATES.forEach(function(item) {
    //     item.templates.forEach(function(template) {
    //         var src = [item.module, template].join('.');
    //
    //         gulp.src(join(PLATFORM + '.bundles', src, src + '.html'))
    //             .pipe(rename(template + '.html'))
    //             .pipe(gulp.dest(join(dirs.public, 'templates', item.module)));
    //     });
    // });

});


gulp.task('views', ['bundles', 'templates']);
gulp.task('assets', ['styles', 'plugins', 'application']);

gulp.task('default', ['views', 'assets']);
