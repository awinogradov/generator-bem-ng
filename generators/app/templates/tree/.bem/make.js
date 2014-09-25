var settings = require('../settings.json'),
    path     = require('path'),
    U        = require('bem').util;

require('bem-tools-autoprefixer').extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,
    bundlesLevelsRegexp : /^.+?\.pages$/

});

MAKE.decl('BundleNode', {

    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'stylus',
            'css',
            'bemhtml',
            'js',
            'html'
        ];
    },

    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'stylus']);
    },

    getLevels : function() {
        return [
            'libs/bem-core/common.blocks',
            'libs/bem-ng/common.blocks',
            'common.blocks',
            'design/common.blocks',
            'service.blocks',
            'design/service.blocks',
            'application.blocks'
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

    getBrowsers : function () {
        return settings.browsers_support;
    }

});

MAKE.decl('BundlesLevelNode', {

    buildMergedBundle : function() {
        return true;
    },
    mergedBundleName : function() {
        return settings.assets.name;
    }

});
