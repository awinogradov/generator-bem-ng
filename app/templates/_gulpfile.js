var $        = require('gulp-load-plugins')(),
    pkg      = require('./package.json'),
    settings = require('./settings.json'),
    bsync    = require('browser-sync'),
    tsync    = require('run-sequence'),
    bem      = require('bem').api,
    gulp     = require('gulp'),
    path     = require('path'),
    join     = path.join,

    APATH    = join(settings.platform + '.bundles', settings.assets.name),
    CSS      = join(APATH, '_' + settings.assets.name + '.css'),
    JS       = join(APATH, '_' + settings.assets.name + '.js'),
    BUNDLES  = ['index'].map(function(bundle){ return join(settings.platform + '.bundles', bundle, bundle + '.html')}),

    V        = pkg.version,
    DNAME    = pkg.name + '_v' + V;

gulp.task('bem', function(){
    return bem.make({verbosity: 'error'});
});

gulp.task('styles', function() {
    gulp.src(CSS)
        .pipe($.minifyCss())
        .pipe($.rename(settings.assets.styles.name))
        .pipe(gulp.dest(settings.assets.styles.dir));
});

gulp.task('bem-styles', function () {
    tsync('bem', 'styles');
});

gulp.task('scripts', function() {
    gulp.src(JS)
        .pipe($.rename(settings.assets.scripts.name))
        .pipe(gulp.dest(settings.assets.scripts.dir))
});

gulp.task('bem-scripts', function () {
    tsync('bem', 'scripts');
});

gulp.task('assets', ['styles', 'scripts']);

gulp.task('bundles', function(){
    gulp.src(BUNDLES)
        .pipe(gulp.dest(settings.public));
});

gulp.task('watch', function() {
    gulp.watch([
            'design/**/**/*.styl',
            'design/**/**/**/*.styl'
        ],  $.shell.task(['gulp bem-styles']));

    gulp.watch([
            '{common.blocks,' + settings.platform + '.blocks}/*.js',
            '{common.blocks,' + settings.platform + '.blocks}/**/*.js'
        ],  $.shell.task(['gulp bem-scripts']));

    gulp.watch([
            settings.platform + '.bundles/**/*.bemjson.js',
            '{common.blocks,' + settings.platform + '.blocks}/*.bemhtml',
            '{common.blocks,' + settings.platform + '.blocks}/**/*.bemhtml'
        ],  $.shell.task(['gulp build']));
});

gulp.task('sync', function(){
    var files = [
        join(settings.public, '*.html'),
        join(settings.assets.scripts.dir, settings.assets.scripts.name),
        join(settings.assets.styles.dir, settings.assets.styles.name)
    ];

    var options = {
        notify: false,
        open: false,
        ghostMode: false,
        logLevel: 'debug',
        minify: false,
        server: {
            baseDir: settings.public
        }
    };

    bsync.init(files, options, function (err, inj) {
        if (err) throw Error(err);
    });
});

gulp.task('build', function () {
    tsync('bem', ['bundles', 'assets']);
});

gulp.task('default', function () {
    tsync('default', ['watch', 'sync']);
});
