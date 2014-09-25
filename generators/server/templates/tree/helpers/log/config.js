/**
 * Created by verybigman on 01/04/14.
 */
var winston = require('winston');

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
