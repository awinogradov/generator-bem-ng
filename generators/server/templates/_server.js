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
    settings   = require('./settings'),
    app        = express(),
    join       = path.join;

// APP CONFIG ==================================================================
app.use(bodyParser());
app.use('/', express.static(join(process.cwd(), settings.public)));

// APP SERVER ==================================================================
app.set('title', pkg.name);

require('./server.blocks/helpers/log')(app);
require('./server.blocks/views')(app);

http.createServer(app).listen(settings.server.port, function(){
    log.info('Express for <%= _.slugify(appname) %> started on localhost:' + settings.server.port);
});
