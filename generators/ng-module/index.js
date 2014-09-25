'use strict';

var cwd    = process.cwd(),
    util   = require('util'),
    path   = require('path'),
    join   = path.join,
    yeoman = require('yeoman-generator');

var NgModuleGenerator = module.exports = function NgModuleGenerator(args, options, config) {

    yeoman.generators.NamedBase.apply(this, arguments);

    var _this = this;

    this.module = this.name;

    this.on('end', function () {
        _this.log("\nAdd block \'' + _this.module + '\' to common.blocks/page/page.deps.js file: \n{block:\'' + _this.module + '\'} \n\nOr use block in BEMJSON:\n{\n    block : \'' + _this.module + '\',\n    attrs : { \'ng-controller\' : \'' + _this.module.charAt(0).toUpperCase() + _this.module.slice(1, _this.module.length) + 'Controller\' }\n}\n");
    });
};

util.inherits(NgModuleGenerator, yeoman.generators.NamedBase);

NgModuleGenerator.prototype.templates = function templates() {
    this.template(join('_module.js'), join('application.blocks', this.module, this.module + '.js'));
    this.template(join('_module.deps.js'), join('application.blocks', this.module, this.module + '.deps.js'));
    this.template(join('_controller.js'), join('application.blocks', this.module, '__controllers', '_' + this.module, this.module + '__controllers_' + this.module + '.js'));
    this.template(join('_routes.js'), join('application.blocks', this.module, '__routes', this.module + '__routes.js'));
};
