'use strict';

var util = require('util'),
    yeoman = require('yeoman-generator'),
    path = require('path'),
    join = path.join,
    fs = require('fs-extra'),
    cwd = process.cwd(),
    libDir = 'bower_components',
    BOWER_COMPONENTS = join(cwd, libDir),
    STUB = join(BOWER_COMPONENTS, 'project-stub'),
    STUB_CONFIGS = join(STUB, '.bem'),
    STUB_BUNDLES = join(STUB, 'desktop.bundles'),
    STUB_BLOCKS = join(STUB, 'desktop.blocks');

var InitGenerator = module.exports = function InitGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.libDir = libDir;

};

util.inherits(InitGenerator, yeoman.generators.Base);

InitGenerator.prototype.projectStubStructure = function projectStubStructure() {

    this.directory(STUB_CONFIGS, '.bem');
    this.directory(STUB_BUNDLES, 'app.bundles');
    this.directory(STUB_BLOCKS, 'app.blocks');
    this.directory('404', join('app.bundles', '404'));

    // Remove default files
    fs.remove(join(cwd, '.bem', 'make.js'));
    fs.remove(join(cwd, '.bem', 'levels', 'bundles.js'));
    fs.remove(join(cwd, 'app.bundles', '.bem', 'level.js'));

    // Custom configs
    // TODO: Make sync after remove defaults
    this.template('_make.js', join('.bem', 'make.js'));
    this.template('_bundles.js', join('.bem', 'levels', 'bundles.js'));
    this.copy('_level.js', join('app.bundles', '.bem', 'level.js'));
};

InitGenerator.prototype.appAssets = function appAssets() {
    this.mkdir('app.assets');
    this.mkdir('app.assets/images');
    this.mkdir('app.assets/images/icons');

    this.copy(join(STUB, 'favicon.ico'), 'app.assets/favicon.ico');
    this.copy('robots.txt', 'app.assets/robots.txt');
    this.copy('htaccess', 'app.assets/.htaccess');
    this.copy('humans.txt', 'app.assets/humans.txt');
};
