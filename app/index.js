'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var BemGenerator = module.exports = function BemGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.options['skip-install-message'] = "This generator can't work without components installation";

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BemGenerator, yeoman.generators.Base);

BemGenerator.prototype.askFor = function askFor() {

    console.log(this.yeoman);

//  TODO: Add question about preprocessors: SASS and Stylus; LESS is very slow now
//  TODO: Add question about add MVC: EmberJS, AngularJS, bem-mvc

};

BemGenerator.prototype.dots = function git() {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
    this.copy('editorconfig', '.editorconfig');
};

BemGenerator.prototype.packages = function packageJSON() {
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
};

//  TODO: Make Gulp task for distribution

BemGenerator.prototype.install = function () {
    if (this.options['skip-install']) {
        return;
    }

    this.on('end', function () {
        this.installDependencies({
            skipMessage: this.options['skip-install-message'],
            skipInstall: this.options['skip-install'],
            bower: false,
            callback: function() {
                var bowerNpmInstall = require(join(cwd, 'node_modules', 'bower-npm-install'));
                // call npm install for every bower component
                console.log("\nInstall npm dependencies for bower_components...\n");
                bowerNpmInstall()
                    .on('error', function(err) { console.error(err); })
                    .on('end', function(installed) {
                        console.log('Installed packages: ' + JSON.stringify(installed, null, 2));
                        // Go to make structure
                        this.invoke('bem:init', {options: {nested: true, appName: this.appName}});
                    }.bind(this));
            }.bind(this)
        });
    });
};