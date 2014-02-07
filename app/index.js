'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BemGenerator = module.exports = function BemGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BemGenerator, yeoman.generators.Base);

BemGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like some BEM?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

BemGenerator.prototype.git = function git() {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
};

BemGenerator.prototype.packageJSON = function packageJSON() {
    this.template('_package.json', 'package.json');
}

BemGenerator.prototype.bower = function bower() {
    this.template('_bower.json', 'bower.json');
    this.copy('bowerrc', '.bowerrc');
}

BemGenerator.prototype.jshint = function jshint() {
    this.copy('jshintrc', '.jshintrc');
};

BemGenerator.prototype.editorConfig = function editorConfig() {
    this.copy('editorconfig', '.editorconfig');
};

BemGenerator.prototype.app = function app() {
    this.mkdir('app.bundles');
    this.mkdir('app.blocks');
    this.mkdir('app.resources');
    this.mkdir('app.resources/images');

    this.copy('favicon.ico', 'app.resources/favicon.ico');
    this.copy('robots.txt', 'app.resources/robots.txt');
    this.copy('htaccess', 'app.resources/.htaccess');
};
