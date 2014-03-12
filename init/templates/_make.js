/* jshint node:true */
/* global MAKE */

var environ = require('bem-environ')({ libDir: '<%= libDir %>' });

environ.extendMake(MAKE);

// Use 'production' for minimize and uglify files with borschik
process.env.YENV = 'development';

MAKE.decl('Arch', {

    libraries: [
        'bem-core @ v2.0.0',
        'bem-components @ 79ca4740c605339941e2a560c6681bfea02f00b3'
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