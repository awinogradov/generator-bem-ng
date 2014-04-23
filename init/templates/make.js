var pkg     = require('../package.json')._settings,
    path    = require('path'),
    join    = path.join,
    environ = require('bem-environ')({ libDir: pkg.libs }),

    PRJ_ROOT     = environ.PRJ_ROOT,
    LIBS_PATH    = join(PRJ_ROOT, pkg.libs),
    BUNDLES_PATH = pkg.bundles;

// npm package with tech for autoprefixer
// more info here: https://github.com/bem/bem-tools-autoprefixer
require('bem-tools-autoprefixer').extendMake(MAKE);
environ.extendMake(MAKE);

MAKE.decl('Arch', {
    // this is customized path to bundles
    // more info here: http://bem.info/tools/bem/bem-tools/customization
    getBundlesLevels: function() {
        return [
            BUNDLES_PATH
        ];
    }
});

MAKE.decl('BundleNode', {

    // techs for bundles build
    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'scss',
            'html'
        ];
    },

    // techs in parallel processes
    getForkedTechs : function() {
        return this.__base().concat(['scss']);
    },

    // levels for build
    getLevels : function() {
        // libs levels
        return [
            // bem-core without i-bem.js
            // see how in bem-protein/app/blocks/base/page/page.deps.js
            'bem-core/common.blocks',
            // You can also install bem-components (use bower-npm-install)
            // and uncomment next lines for using i-bem.js blocks
            //'bem-components/common.blocks',
            //'bem-components/desktop.blocks',
            'bem-protein/blocks/base',
            'bem-protein/blocks/typo',
            'bem-protein/blocks/grid',
            'bem-protein/blocks/buttons',
            'bem-protein/blocks/forms',
            'bem-protein/blocks/navigation',
            'bem-protein/blocks/lists',
            'bem-protein/blocks/tables',
            'bem-protein/blocks/wrappers',
            'bem-protein/blocks/windows',
            'bem-protein/blocks/progress',
            'bem-protein/blocks/js'
        ]
        .map(function(level) { return path.resolve(LIBS_PATH, level); })
        // this project levels
        .concat([
            'blocks/base',
            'design/base',
        ]
        .map(function(level) { return path.resolve(PRJ_ROOT, level); }));
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('scss');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }
});

// this is node based on autoprefixer
// more info here: https://github.com/ai/autoprefixer
MAKE.decl('AutoprefixerNode', {
    getBrowsers : function() {
        // support browsers: only 2 last versions
        return [
            'last 2 versions'
        ];
    }
});
