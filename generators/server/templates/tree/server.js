'use strict';

// MODULES =====================================================================
var log        = require('./server/helpers/log/config')(module),
    pkg        = require('./package'),
    express    = require('express'),
    bodyParser = require('body-parser'),
    http       = require('http'),
    path       = require('path'),
    url        = require('url'),
    dirs       = pkg._directories,
    settings   = pkg._settings,
    app        = express(),
    join       = path.join;

// APP CONFIG ==================================================================
app.use(bodyParser());
app.use('/', express.static(join(process.cwd(), dirs.public)));

// APP SERVER ==================================================================
app.set('title', pkg.name);

require('./server/helpers/log')(app);
require('./server/views')(app);

http.createServer(app).listen(3000, function(){
    log.info('Express for <%= _.slugify(appname) %> started on localhost:3000');
});
