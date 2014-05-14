'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator'),
    bower  = require('bower');

var AngularGenerator = module.exports = function AngularGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(AngularGenerator, yeoman.generators.NamedBase);

AngularGenerator.prototype.tree = function tree() {
    this.mkdir(join('app', 'system', 'directives'));
    this.mkdir(join('app', 'system', 'services'));
    this.mkdir(join('app', 'system', 'routes'));
    this.mkdir(join('app', 'system', 'controllers'));
};

AngularGenerator.prototype.templates = function templates() {
    this.template(join('system', '_init.js'), join('app', 'system', 'system.js'));
    this.template(join('system', '_controller.js'), join('app', 'system', 'controllers', 'index.js'));
    this.template(join('system', '_routes.js'), join('app', 'system', 'routes', 'system.js'));

    this.template(join('_init.js'), join('app', 'init.js'));
};

AngularGenerator.prototype.libs = function libs() {
    this.directory(join('libs', 'angularjs'), join('common.blocks', 'libs', 'angularjs'));
    this.copy('deps.js', join('common.blocks', 'base', 'page', 'page.deps.js'));
};

AngularGenerator.prototype.partials = function partials() {
    this.directory(join('partials', 'system.index'), join('desktop.bundles', 'system.index'));
}

AngularGenerator.prototype.blocks = function blocks() {
    this.directory(join('blocks', 'template'), join('common.blocks', 'base', 'template'));
    this.directory(join('blocks', 'view'), join('common.blocks', 'base', 'view'));
}

AngularGenerator.prototype.dependencies = function dependencies() {

    bower
    .commands
    .install(['angular', 'angular-ui-router'], { save: true }, { interactive: true })
    .on('error', function (error) {
        console.log(error);
    })
    .on('end', function (error) {
        console.log('\nAngularJS installed succesfully!');
        console.log('\nYou have to:');
        console.log('1. Uncomment \'application\' and \'templates\' tasks in gulpfile');
        console.log('2. Uncomment \'application.min.js\' script, ng-app attribute for page and block \'view\' in desktop.bundles/index/index.bemjson.js\n');
    });
};
