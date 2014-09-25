// MODULES =====================================================================
var pkg      = require('../../package'),
    cons     = require('consolidate'),
    path     = require('path'),
    join     = path.join;

// VIEWS TEMPLATE ENGINE =======================================================
// Use in views EJS template engine for redering on server.
// Views builded in html tech and we require html as EJS
// template extension. In future this maybe fixed (html => ejs),
// but we must add new tech for building views for bem-tools.
module.exports = function(app) {

    app.engine('html', cons.ejs);
    app.set('view engine', 'html');

}
