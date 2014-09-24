'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator'),
    npm    = require('npm');

var ServerGenerator = module.exports = function ServerGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.settings = JSON.parse(this.readFileAsString(path.join(__dirname, '../app/templates/_settings.json')));
};

util.inherits(ServerGenerator, yeoman.generators.NamedBase);

ServerGenerator.prototype.server = function server() {
    this.directory('tree', 'server');
    this.template('_app.js', 'app.js');
};

ServerGenerator.prototype.dependencies = function dependencies() {

    var _this = this;

    npm.load(function(err, npm) {

        if (err) console.log(err);

        npm
        .commands
        .install(settings.server.deps, function() {
            console.log('\nExpress installed succesfully!');

            _this.log.write('').ok('Done!');
        });
    });
};
