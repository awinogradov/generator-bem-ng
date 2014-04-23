'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var BemGenerator = module.exports = function BemGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.pkg      = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    this.email    = this.user.git.email;
    this.username = this.user.git.username || this.shell.exec('whoami').output.trim();

};

util.inherits(BemGenerator, yeoman.generators.Base);

BemGenerator.prototype.dots = function git() {
    this.directory('dots', cwd);
};

BemGenerator.prototype.packages = function packageJSON() {
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
};

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
