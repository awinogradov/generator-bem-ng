var dirs            = require('../../package.json')._directories,
    path            = require('path'),
    environ         = require('bem-environ'),
    getTechResolver = environ.getTechResolver,

    PRJ_ROOT        = environ.PRJ_ROOT,
    PRJ_TECHS       = path.resolve(PRJ_ROOT, '.bem/techs'),
    BEM_TECHS       = environ.getLibPath('bem-techs', '.bem/techs'),
    BEMCORE_TECHS   = environ.getLibPath('bem-core', '.bem/techs');

exports.getTechs = function() {
    var techs = {
        'bemdecl.js'           : 'v2/bemdecl.js',
        'deps.js'              : 'v2/deps.js',
        'roole'                : 'v2/roole',
        'css'                  : 'v2/css',
        'js'                   : 'v2/js-i'
    };

    // use techs from project (.bem/techs)
    [].forEach(getTechResolver(techs, PRJ_TECHS));

    // use techs from bem-techs library
    ['bemjson.js', 'md'].forEach(getTechResolver(techs, BEM_TECHS));

    // use techs from bem-core library
    ['bemhtml'].forEach(getTechResolver(techs, BEMCORE_TECHS));

    return techs;
};

exports.defaultTechs = ['roole', 'bemhtml', 'js', 'md'];
