'use strict';

var fs     = require('fs-extra'),
    cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var InitGenerator = module.exports = function InitGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.pkg = JSON.parse(this.readFileAsString(join(cwd, 'package.json')))._settings;

    this.on('end', function () {
        this.log.write('').ok('Done!');
        setTimeout(process.exit, 0, 0);
    });
};

util.inherits(InitGenerator, yeoman.generators.Base);

InitGenerator.prototype.appTree = function appTree() {
    this.directory('tree', cwd);
};

// If this files move to directory and copy directory, bem make don't work.
// It can't find levels, i don't know why. This is magic.
InitGenerator.prototype.customConfigs = function customConfigs() {
    this.copy('make.js', join('.bem', 'make.js'));
    this.copy('bundles.js', join('.bem', 'levels', 'bundles.js'));
    this.copy('blocks.js', join('.bem', 'levels', 'blocks.js'));
};

InitGenerator.prototype.readme = function readme() {
    this.copy('_README.md', 'README.md');
};
