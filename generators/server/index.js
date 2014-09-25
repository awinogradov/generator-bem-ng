'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator'),
    npm    = require('npm');

var ServerGenerator = module.exports = function ServerGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.settings = this.dest.readJSON('settings.json');
};

util.inherits(ServerGenerator, yeoman.generators.NamedBase);

ServerGenerator.prototype.server = function server() {
    this.directory('tree', 'server.blocks');
    this.template('_server.js', 'server.js');
};

ServerGenerator.prototype.dependencies = function dependencies() {

    var _this = this;

    npm.load(function(err, npm) {

        if (err) console.log(err);

        npm
        .commands
        .install(settings.server.deps, function() {
            console.log('\nExpress installed succesfully!\n');

            _this.log.write('').ok('Done!');
        });
    });
};
