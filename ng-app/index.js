'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator'),
    bower  = require('bower');

var NgAppGenerator = module.exports = function NgAppGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.settings = JSON.parse(this.readFileAsString(path.join(__dirname, '../app/templates/_settings.json')));
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

NgAppGenerator.prototype.partials = function partials() {
    this.directory(join('partials', 'system.index'), join('application.pages', 'system.index'));
}

NgAppGenerator.prototype.dependencies = function dependencies() {

    var _this = this;

    bower
    .commands
    .install(settings.application.deps, { save: true }, { interactive: true })
    .on('error', function (error) {
        console.log(error);
    })
    .on('end', function (error) {
        console.log('\nAngularJS installed succesfully!');
        console.log('\nYou have to:');
        console.log('1. Uncomment \'application\' and \'templates\' tasks in gulpfile');
        console.log('2. Uncomment \'application.min.js\' script, ng-app attribute for page and block \'view\' in application.pages/index/index.bemjson.js');
        console.log('3. Uncomment \'bem-ng\' levels in .bem/make.js');

        _this.log.write('').ok('Done!');
    });

};
