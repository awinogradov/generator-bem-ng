var dirs = require('../package.json')._directories,
    path = require('path');

// npm package with tech for autoprefixer
// more info here: https://github.com/bem/bem-tools-autoprefixer
require('bem-tools-autoprefixer').extendMake(MAKE);

MAKE.decl('Arch', {

    bundlesLevelsRegexp : /^.+?\.bundles$/

});

MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'stylus',
            'css',
            'js',
            'bemhtml',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['stylus']);
    },

    getLevelsMap : function() {
        return {
            'desktop':
            // bem-core levels
            [
                'common.blocks',
                'desktop.blocks'
            ].map(function(level){ return path.join(dirs.libs, 'bem-core', level); })

            // bem-components levels
            .concat(
                [
                    'common.blocks',
                    'desktop.blocks',
                    'design/common.blocks',
                    'design/desktop.blocks'
                ].map(function(level){ return path.join(dirs.libs, 'bem-components', level); })
            )

            // bem-ng levels
            // .concat(
            //     [
            //         'libs.blocks',
            //         'common.blocks',
            //     ].map(function(level){ return path.join(dirs.libs, 'bem-ng', level); })
            // )

            // project levels
            .concat(
                [
                    'libs.blocks',
                    'common.blocks',
                    'design/common.blocks',
                    'desktop.blocks',
                    'design/desktop.blocks'
                ]
            ),

            'touch-pad': [],
            'touch-phone': []
        };
    },

    getLevels : function() {
        var resolve = path.resolve.bind(path, this.root),
            buildLevel = this.getLevelPath().split('.')[0],
            levels = this.getLevelsMap()[buildLevel] || [];

        return levels
            .map(function(path) { return resolve(path); })
            .concat(resolve(path.dirname(this.getNodePrefix()), 'blocks'));
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('stylus');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});

MAKE.decl('AutoprefixerNode', {

    getPlatform : function() {
        return this.output.split('.')[0];
    },

    getBrowsers : function() {
        var platform = this.getPlatform();
        switch(platform) {

        case 'desktop':
            return [
                'last 2 versions',
                'ie 10',
                'ff 24',
                'opera 12.16'
            ];

        case 'touch-pad':
            return [
                'android 4',
                'ios 5'
            ];

        case 'touch-phone':
            return [
                'android 4',
                'ios 6',
                'ie 10'
            ];

        }

        return this.__base();
    }

});

MAKE.decl('BundlesLevelNode', {
    buildMergedBundle: function() {
        return true;
    },
    mergedBundleName: function() {
        return 'assets';
    }
});
