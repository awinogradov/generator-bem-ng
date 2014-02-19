'use strict';

var util = require('util'),
    yeoman = require('yeoman-generator'),
    path = require('path'),
    join = path.join,
    BOWER_COMPONENTS = join(process.cwd(), 'bower_components'),
    STUB = join(BOWER_COMPONENTS, 'project-stub'),
    STUB_CONFIGS = join(BOWER_COMPONENTS, STUB, '.bem'),
    STUB_BUNDLES = join(BOWER_COMPONENTS, STUB, 'desktop.bundles'),
    STUB_BLOCKS = join(BOWER_COMPONENTS, STUB, 'desktop.blocks');

var InitGenerator = module.exports = function InitGenerator(args, options, config) {

    yeoman.generators.NamedBase.apply(this, arguments);

    this.libDir = 'bower_components';

};

util.inherits(InitGenerator, yeoman.generators.NamedBase);

InitGenerator.prototype.projectStubStructure = function projectStubStructure() {

    this.directory(STUB_CONFIGS, '.bem');
    this.directory(STUB_BUNDLES, 'app.bundles');
    this.directory(STUB_BLOCKS, 'app.blocks');
    this.directory('404', join('app.bundles', '404'));

    this.template('_make.js', '.bem/make.js');
    this.template('_bundles.js', '.bem/levels/bundles.js');

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
