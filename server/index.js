'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var ServerGenerator = module.exports = function ServerGenerator(args, options, config) {
  
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the server subgenerator with the argument ' + this.name + '.');
};

util.inherits(ServerGenerator, yeoman.generators.NamedBase);

ServerGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
