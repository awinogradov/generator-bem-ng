'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BemGenerator = module.exports = function BemGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

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

BemGenerator.prototype.gruntFile = function bower() {
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.template('_project.json', 'project.json');
}

BemGenerator.prototype.jshint = function jshint() {
    this.copy('jshintrc', '.jshintrc');
};

BemGenerator.prototype.editorConfig = function editorConfig() {
    this.copy('editorconfig', '.editorconfig');
};

BemGenerator.prototype.bemMethod = function bemMethod() {
    this.directory('bem', '.bem');
    this.directory('app.bundles', 'app.bundles');
    this.directory('404', 'app.bundles/404');
    this.directory('index', 'app.bundles/index');
    this.directory('app.blocks', 'app.blocks');
};

BemGenerator.prototype.app = function app() {
    this.mkdir('app.assets');
    this.mkdir('app.assets/images');

    this.copy('favicon.ico', 'app.assets/favicon.ico');
    this.copy('robots.txt', 'app.assets/robots.txt');
    this.copy('htaccess', 'app.assets/.htaccess');
};

BemGenerator.prototype.install = function () {
    if (this.options['skip-install']) {
        return;
    }

    var done = this.async();
    this.installDependencies({
        skipMessage: this.options['skip-install-message'],
        skipInstall: this.options['skip-install'],
        callback: done
    });
};
