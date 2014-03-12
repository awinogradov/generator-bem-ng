var PATH = require('path'),
    environ = require('bem-environ')({ libDir: '<%= libDir %>' }),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.getTechs = function() {

    return {
        'vanilla.js'    : join(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js'    : join(BEMCORE_TECHS, 'browser.js.js'),
        'css'           : 'v2/css',
        'bemhtml'       : join(BEMCORE_TECHS, 'bemhtml.js')
    };

};

exports.defaultTechs = ['css', 'browser.js', 'bemhtml'];