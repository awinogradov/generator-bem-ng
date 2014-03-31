'use strict';

var fs     = require('fs-extra'),
    cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var InitGenerator = module.exports = function InitGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    // require vars for templates
    this.pkg = JSON.parse(this.readFileAsString(join(cwd, 'package.json')))._settings;
    this.stubConfigs = join(cwd, this.pkg.libs, 'project-stub', '.bem');
};

util.inherits(InitGenerator, yeoman.generators.Base);

InitGenerator.prototype.appStructure = function appStructure() {
    // copy configs from project-stub
    this.directory(this.stubConfigs, '.bem');

    // make folders tree for bundles
    // add index bundle for example
    this.copy('index.bemjson.js', join(this.pkg.root, this.pkg.bundles, 'index', 'index.bemjson.js'));
    // fix for bundles. This remove warns from console
    this.directory('bundles_fix', join(this.pkg.root, this.pkg.bundles, 'index', 'blocks'));

    // make folders tree for blocks
    // add blocks for example
    this.directory('blocks_fix', join(this.pkg.root, this.pkg.blocks, 'typography'));
};

InitGenerator.prototype.removeDefaults = function removeDefaults() {
    fs.remove(join(cwd, '.bem', 'make.js'));
    fs.remove(join(cwd, '.bem', 'levels', 'bundles.js'));
    fs.remove(join(cwd, '.bem', 'levels', 'blocks.js'));
    fs.remove(join(cwd, '.bem', 'techs'));
};

InitGenerator.prototype.customConfigs = function customConfigs() {
    this.copy('make.js', join('.bem', 'make.js'));
    this.copy('bundles.js', join('.bem', 'levels', 'bundles.js'));
    this.copy('blocks.js', join('.bem', 'levels', 'blocks.js'));
    this.copy('level.js', join(this.pkg.root, this.pkg.bundles, '.bem', 'level.js'));
};

InitGenerator.prototype.app = function app() {
    this.copy('favicon.ico', join(this.pkg.root, 'favicon.ico'));
    this.copy('robots.txt', join(this.pkg.root, 'robots.txt'));
    this.copy('htaccess', join(this.pkg.root, '.htaccess'));
    this.copy('humans.txt', join(this.pkg.root, 'humans.txt'));
};

InitGenerator.prototype.readme = function readme() {
    this.copy('_README.md', 'README.md');
};
