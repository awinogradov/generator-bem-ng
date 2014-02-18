'use strict';

var util = require('util'),
    fs = require('fs-extra'),
    path = require('path'),
    join = path.join,
    ERROR = "This generator can't work without components installation",
    yeoman = require('yeoman-generator');


var BemGenerator = module.exports = function BemGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.options['skip-install-message'] = ERROR;

    this.options['skip-install-message'] = ERROR;

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

BemGenerator.prototype.csscomb = function csscomb() {
    this.copy('_csscomb.json', '.csscomb.json');
};

BemGenerator.prototype.editorConfig = function editorConfig() {
    this.copy('editorconfig', '.editorconfig');
};

BemGenerator.prototype.appAssets = function editorConfig() {
    this.mkdir('app.assets');
    this.mkdir('app.assets/images');

    this.copy('favicon.ico', 'app.assets/favicon.ico');
    this.copy('robots.txt', 'app.assets/robots.txt');
    this.copy('htaccess', 'app.assets/.htaccess');
    this.copy('humans.txt', 'app.assets/humans.txt');
};

BemGenerator.prototype.install = function () {
    if (this.options['skip-install']) {
        return;
    }

    var done = (function () {
        // TODO: Move it to grunt init task
//        this.project = JSON.parse(this.readFileAsString('project.json'));
//        var BOWER_COMPONENTS = join(process.cwd(), this.project.libs),
//            STUB_CONFIGS = join(BOWER_COMPONENTS, 'project-stub/.bem'),
//            STUB_BUNDLES = join(BOWER_COMPONENTS, 'project-stub/desktop.bundles'),
//            STUB_BLOCKS = join(BOWER_COMPONENTS, 'project-stub/desktop.blocks');
//
//        fs.copy(STUB_CONFIGS, '.bem');
//        fs.copy(STUB_BUNDLES, 'app.bundles');
//        fs.copy(STUB_BLOCKS, 'app.blocks');
//        fs.copy(join(STUB_BUNDLES, 'index'), join('app.bundles', 'index'));
//        fs.copy(join(__dirname, 'templates', '404'), join('app.bundles', '404'));
//
//        this.template('_make.js', '.bem/make.js');
//        this.template('_bundles.js', '.bem/levels/bundles.js');
    })

    this.on('end', function () {
        this.installDependencies({
            skipMessage: this.options['skip-install-message'],
            skipInstall: this.options['skip-install'],
            callback: done.bind(this)
        });
    });
};