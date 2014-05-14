'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var NgModuleGenerator = module.exports = function NgModuleGenerator(args, options, config) {

    yeoman.generators.NamedBase.apply(this, arguments);

    this.module = this.name;
};

util.inherits(NgModuleGenerator, yeoman.generators.NamedBase);

NgModuleGenerator.prototype.tree = function tree() {
    this.mkdir(join('app', this.module, 'directives'));
    this.mkdir(join('app', this.module, 'services'));
    this.mkdir(join('app', this.module, 'routes'));
    this.mkdir(join('app', this.module, 'controllers'));
};

NgModuleGenerator.prototype.templates = function templates() {
    this.template(join('module', '_init.js'), join('app', this.module, this.module + '.js'));
    this.template(join('module', '_controller.js'), join('app', this.module, 'controllers', 'index.js'));
    this.template(join('module', '_routes.js'), join('app', this.module, 'routes', this.module + '.js'));
};
