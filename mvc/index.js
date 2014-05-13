'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var MvcGenerator = module.exports = function MvcGenerator(args, options, config) {
  
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the mvc subgenerator with the argument ' + this.name + '.');
};

util.inherits(MvcGenerator, yeoman.generators.NamedBase);

MvcGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
