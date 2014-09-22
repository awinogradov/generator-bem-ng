'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var BemGenerator = module.exports = function BemGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.pkg      = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    this.settings = JSON.parse(this.readFileAsString(path.join(__dirname, '../app/templates/_settings.json')));
    this.email    = this.user.git.email();
    this.username = this.user.git.username || this.shell.exec('whoami').output.trim();

    var _this = this;

    this.on('end', function () {

        if (_this.options['skip-install']) {
            return;
        }

        _this.installDependencies({
            skipMessage: _this.options['skip-install-message'],
            skipInstall: _this.options['skip-install'],
            bower: false,
            callback: function() {
                _this.log.write('').ok('Done!');
                setTimeout(process.exit, 0, 0);
            }
        });

    });
};

util.inherits(BemGenerator, yeoman.generators.Base);

BemGenerator.prototype.configs = function configs() {
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_settings.json', 'settings.json');
    this.template('_gulpfile.js', 'gulpfile.js');
};

BemGenerator.prototype.app = function app() {
    this.directory('tree', cwd);
    this.template('_index.bemjson.js', join(this.settings.platform + '.bundles', 'index', 'index.bemjson.js'));
    this.template('_README.md', 'README.md');
};
