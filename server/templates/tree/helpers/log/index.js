// MODULES =====================================================================
var pkg          = require('../../../package'),
    express      = require('express'),
    path         = require('path'),
    settings     = pkg._settings,
    join         = path.join,
    errorhandler = require('errorhandler'),
    morgan       = require('morgan');

// LOG SETTINGS ================================================================
module.exports = function(app) {

    if ('development' == settings.env) {
        app.use(errorhandler());
        app.use(morgan({format: 'dev'}));
    }
    else {
        app.use(morgan({format: 'default'}));
    }

}
