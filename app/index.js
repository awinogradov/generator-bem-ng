'use strict';

var util = require('util'),
    yeoman = require('yeoman-generator'),
    path = require('path'), join = path.join;

var BemGenerator = module.exports = function BemGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.options['skip-install-message'] = "This generator can't work without components installation";

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BemGenerator, yeoman.generators.Base);

BemGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    console.log(this.yeoman);

    var prompts = [{
        type: 'confirm',
        name: 'includeExamples',
        message: 'Do you want include BEM examples?',
        default: true
    }];

    this.prompt(prompts, function (props) {
        this.includeExamples = props.includeExamples;

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

BemGenerator.prototype.csscomb = function csscomb() {
    this.copy('_csscomb.json', '.csscomb.json');
};

BemGenerator.prototype.editorConfig = function editorConfig() {
    this.copy('editorconfig', '.editorconfig');
};

BemGenerator.prototype.install = function () {
    if (this.options['skip-install']) {
        return;
    }

    this.on('end', function () {
        this.installDependencies({
            skipMessage: this.options['skip-install-message'],
            skipInstall: this.options['skip-install'],
            callback: false
        });
    });
};