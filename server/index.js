'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var ServerGenerator = module.exports = function ServerGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(ServerGenerator, yeoman.generators.NamedBase);

ServerGenerator.prototype.tree = function files() {

};
