'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator'),
    bower  = require('bower');

var NgGenerator = module.exports = function NgGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.settings = this.dest.readJSON('settings.json');
};

util.inherits(NgGenerator, yeoman.generators.NamedBase);

NgGenerator.prototype.tree = function tree() {
    this.directory('tree', cwd);
};

NgGenerator.prototype.dependencies = function dependencies() {

    var _this = this;

    bower
    .commands
    .install(_this.settings.application.deps, { save: true }, { interactive: true })
    .on('error', function (error) {
        console.log(error);
    })
    .on('end', function (error) {
        console.log('\nAngularJS installed succesfully!');
        console.log('\nYou have to:');
        console.log('1. Uncomment \'application\' and \'templates\' tasks in gulpfile');
        console.log('2. Uncomment \'bem-ng\' levels in .bem/make.js');

        _this.log.write('').ok('Done!');
    });

};
