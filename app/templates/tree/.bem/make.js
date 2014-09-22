var settings = require('../settings.json'),
    path     = require('path'),
    U        = require('bem').util;

require('bem-tools-autoprefixer').extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,
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
            'bemhtml',
            'browser.js+bemhtml',
            'html'
        ];
    },

    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'stylus']);
    },

    getPlatform : function(levelpath) {
        return levelpath.split('.')[0].replace(/-([a-z])/gi, function(_, letter) {
            return letter.toUpperCase();
        });
    },

    getLevels : function() {
        return [
            'libs/bem-core/common.blocks',
            'libs/bem-core/desktop.blocks',
            'libs/bem-components/common.blocks',
            'libs/bem-components/desktop.blocks',
            'libs/bem-components/design/common.blocks',
            'libs/bem-components/design/desktop.blocks',
            settings.platform + '.blocks',
            'design/' + settings.platform + '.blocks'
        ];
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

        case settings.platform:
            return settings.browsers_support;
        }

        return this.__base();
    }

});

MAKE.decl('BundlesLevelNode', {

    buildMergedBundle: function() {
        return true;
    },
    mergedBundleName: function() {
        return settings.assets.name;
    }

});
