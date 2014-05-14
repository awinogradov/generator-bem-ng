'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator'),
    npm    = require('npm');

var ServerGenerator = module.exports = function ServerGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(ServerGenerator, yeoman.generators.NamedBase);

ServerGenerator.prototype.server = function server() {
    this.directory('tree', 'server');
    this.template('_app.js', 'app.js');
};

ServerGenerator.prototype.dependencies = function dependencies() {

    npm.load(function(err, npm) {

        if (err) console.log(err);

        npm
        .commands
        .install(['express', 'body-parser', 'errorhandler', 'morgan', 'winston', 'consolidate', 'ejs'], function() {
            console.log('\nExpress installed succesfully!');
        });
    });
};
