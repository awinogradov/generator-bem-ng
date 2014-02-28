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
    this.projectLevels = '';
    this.projectLevelsArray = this.project.levels;
    this.projectBundles = this.project.bundles;
    this.mergedBundle = this.project.mergedBundle;
    this.projectAssets = this.project.assets;

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

    this.mkdir(this.projectBundles);

    this.directory(join(STUB_BUNDLES, 'index'), join(this.projectBundles, 'index'));

    this.projectLevelsArray.forEach(function(level){
        this.directory(STUB_BLOCKS, level);
    }.bind(this));

    this.projectLevels = this.projectLevelsArray.join("\', \'");
};

InitGenerator.prototype.readme = function readme() {
    this.template('_README.md', 'README.md');
}

InitGenerator.prototype.removeDefaults = function removeDefaults() {
    fs.remove(join(cwd, '.bem', 'make.js'));
    fs.remove(join(cwd, '.bem', 'levels', 'bundles.js'));
};

InitGenerator.prototype.customConfigs = function customConfigs() {
    this.template('_make.js', join('.bem', 'make.js'));
    this.template('_bundles.js', join('.bem', 'levels', 'bundles.js'));
    this.copy('_level.js', join(this.projectBundles, '.bem', 'level.js'));
};

InitGenerator.prototype.appAssets = function appAssets() {
    this.mkdir(join(this.projectAssets, 'images', 'icons'));
    this.copy(join(STUB, 'favicon.ico'), join(this.projectAssets, 'favicon.ico'));
    this.copy('robots.txt', join(this.projectAssets, 'robots.txt'));
    this.copy('htaccess', join(this.projectAssets, '.htaccess'));
    this.copy('humans.txt', join(this.projectAssets, 'humans.txt'));
};
