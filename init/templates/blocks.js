var pkg     = require('../../package.json')._settings,
    join    = require('path').join,
    environ = require('bem-environ'),

    PRJ_ROOT    = environ.PRJ_ROOT,
    LIBS_PATH   = join(PRJ_ROOT, pkg.libs),
    TECHS_PATH  = join('.bem', 'techs'),
    PRJ_TECHS   = join(PRJ_ROOT, TECHS_PATH),
    BEM_TECHS   = join(LIBS_PATH, 'bem-techs', TECHS_PATH);

exports.getTechs = function() {

    return {
        'bemhtml' : join(BEM_TECHS, 'bemhtml.js'),
        'js'      : 'v2/js-i.js',
        'deps.js' : 'v2/deps.js',
        'css'     : 'v2/css.js',
        'md'      : join(BEM_TECHS, 'md.js')
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml', 'md'];
