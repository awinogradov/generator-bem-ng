var pkg     = require('../../package.json')._settings,
    join    = require('path').join,
    environ = require('bem-environ'),

    PRJ_ROOT        = environ.PRJ_ROOT,
    LIBS_PATH       = join(PRJ_ROOT, pkg.libs),
    TECHS_PATH      = join('.bem', 'techs'),
    PRJ_TECHS       = join(PRJ_ROOT, TECHS_PATH),
    BEM_TECHS       = join(LIBS_PATH, 'bem-techs', TECHS_PATH),
    BEMCORE_TECHS   = join(LIBS_PATH, 'bem-core', TECHS_PATH);

exports.getTechs = function() {

    return {
        'bemjson.js' : join(BEM_TECHS, 'bemjson.js'),
        'bemdecl.js' : 'v2/bemdecl.js',
        'deps.js'    : 'v2/deps.js',
        'js'         : 'v2/js-i.js',
        'css'        : join(BEM_TECHS, 'scss.js'),
        'bemhtml'    : join(BEMCORE_TECHS, 'bemhtml.js'),
        'html'       : join(BEMCORE_TECHS, 'html.js')
    };

};

exports.defaultTechs = ['bemjson.js'];

