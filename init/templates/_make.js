/* jshint node:true */
/* global MAKE */

var environ = require('bem-environ')({ libDir: '<%= libDir %>' });

environ.extendMake(MAKE);

process.env.YENV = 'development';

MAKE.decl('Arch', {

    libraries: [
        'bem-core @ f4b46ef0590549042d938f7e981df4d14eb4caef',
        'bem-components @ 82301a8af6c15c2849d1f755a24f594de6522251'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js+bemhtml',
            'css',
            'ie.css',
            'html'
        ];

    },

    'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);
    }

});


MAKE.decl('BundlesLevelNode', {

    mergedBundleName: function() {
        return '<%= mergedBundle %>';
    },

    buildMergedBundle: function() {
        if (this.getLevelPath() === '<%= projectBundles %>') return true;

        return false;
    }
});