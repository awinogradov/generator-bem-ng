'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var BemGenerator = module.exports = function BemGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.settings = this.src.readJSON('tree/settings.json');
    this.email    = this.user.git.email();
    this.username = this.user.git.username;

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

BemGenerator.prototype.app = function app() {
    this.directory('tree', cwd);
};