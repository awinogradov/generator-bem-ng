'use strict';

var util = require('util'),
    yeoman = require('yeoman-generator'),
    path = require('path'), join = path.join,
    fs = require('fs-extra'), cwd = process.cwd(),
    BOWER_COMPONENTS, EXAMPLES, STUB, STUB_CONFIGS, STUB_BUNDLES, STUB_BLOCKS;

var InitGenerator = module.exports = function InitGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    // Require vars for templates
    this.project = JSON.parse(this.readFileAsString(path.join(cwd, 'project.json')));
    this.libDir = this.project.libDir;
    this.libLevels = this.project.libLevels.join("\', \'");
    this.projectLevelsArray = this.project.projectLevels;
    this.projectBundles = this.project.projectBundles;

    BOWER_COMPONENTS = this.libDir;
    EXAMPLES = join(cwd, BOWER_COMPONENTS, 'bem-example');
    STUB = join(cwd, BOWER_COMPONENTS, 'project-stub');
    STUB_CONFIGS = join(STUB, '.bem'),
    STUB_BUNDLES = join(STUB, 'desktop.bundles'),
    STUB_BLOCKS = join(STUB, 'desktop.blocks');
};

util.inherits(InitGenerator, yeoman.generators.Base);

InitGenerator.prototype.projectStubStructure = function projectStubStructure() {
    this.directory(STUB_CONFIGS, '.bem');
    this.directory(join(STUB_BUNDLES, 'index'), join('app.desktop.bundles', 'index'));
    this.projectLevelsArray.forEach(function(level){ this.directory(STUB_BLOCKS, level); }.bind(this));
    this.projectLevels = this.projectLevelsArray.join("\', \'");
};

InitGenerator.prototype.examples = function examples() {
    this.directory(join(EXAMPLES, 'example.bundles', '404'), join('app.desktop.bundles', '404'));
}

InitGenerator.prototype.removeDefaults = function removeDefaults() {
    fs.remove(join(cwd, '.bem', 'make.js'));
    fs.remove(join(cwd, '.bem', 'levels', 'bundles.js'));
};

InitGenerator.prototype.customConfigs = function customConfigs() {
    this.template('_make.js', join('.bem', 'make.js'));
    this.template('_bundles.js', join('.bem', 'levels', 'bundles.js'));
    this.copy('_level.js', join('app.desktop.bundles', '.bem', 'level.js'));
};

InitGenerator.prototype.appAssets = function appAssets() {
    this.mkdir('app.assets/images/icons');
    this.copy(join(STUB, 'favicon.ico'), 'app.assets/favicon.ico');
    this.copy('robots.txt', 'app.assets/robots.txt');
    this.copy('htaccess', 'app.assets/.htaccess');
    this.copy('humans.txt', 'app.assets/humans.txt');
};
