'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator'),
    bower  = require('bower');

var NgAppGenerator = module.exports = function NgAppGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(NgAppGenerator, yeoman.generators.NamedBase);

NgAppGenerator.prototype.tree = function tree() {
    this.mkdir(join('app', 'system', 'directives'));
    this.mkdir(join('app', 'system', 'services'));
    this.mkdir(join('app', 'system', 'routes'));
    this.mkdir(join('app', 'system', 'controllers'));
};

NgAppGenerator.prototype.templates = function templates() {
    this.template(join('system', '_init.js'), join('app', 'system', 'system.js'));
    this.template(join('system', '_controller.js'), join('app', 'system', 'controllers', 'index.js'));
    this.template(join('system', '_routes.js'), join('app', 'system', 'routes', 'system.js'));

    this.template(join('_init.js'), join('app', 'init.js'));
};

NgAppGenerator.prototype.libs = function libs() {
    this.directory(join('libs', 'angularjs'), join('common.blocks', 'libs', 'angularjs'));
    this.copy('deps.js', join('common.blocks', 'base', 'page', 'page.deps.js'));
};

NgAppGenerator.prototype.partials = function partials() {
    this.directory(join('partials', 'system.index'), join('desktop.bundles', 'system.index'));
}

NgAppGenerator.prototype.blocks = function blocks() {
    this.directory(join('blocks', 'ng-template'), join('common.blocks', 'base', 'ng-template'));
    this.directory(join('blocks', 'ng-view'), join('common.blocks', 'base', 'ng-view'));
}

NgAppGenerator.prototype.dependencies = function dependencies() {

    var _this = this;

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
        console.log('2. Uncomment \'application.min.js\' script, ng-app attribute for page and block \'view\' in desktop.bundles/index/index.bemjson.js');

        _this.log.write('').ok('Done!');
    });

};
