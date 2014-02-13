var PATH = require('path'),
    BEM = require('bem'),
    environ = require('bem-environ')({ libDir: 'bower_components' });

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths(
            [
                // Include Yandex maintainable blocks
                'bem-core/common.blocks',
                'bem-core/desktop.blocks',
                'bem-components/common.blocks',
                'bem-components/desktop.blocks',
                // Include examples
                'webapp-bem-example/example.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.LIB_ROOT, path); })
            // Include custom blocks
            .concat([
                'app.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.PRJ_ROOT, path); })))
    });

};
