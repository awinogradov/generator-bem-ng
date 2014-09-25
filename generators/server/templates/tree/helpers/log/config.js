// MODULES =====================================================================
var winston = require('winston');

// LOGGER OVERRIDE =====================================================================
function getLogger(module) {

    var path = module.filename.split('/').slice(-2).join('/');

    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                label: path
            })
        ]
    });

}

module.exports = getLogger;
