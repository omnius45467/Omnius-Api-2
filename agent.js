/**
 * Created by jeremyrobles on 8/15/16.
 */
var api = require('./api.js'),
    control = require('./controls'),
    cylon = require('./cylon'),
    // comp = require("signal-control-utils").Comparison,
    env = require('node-env-file');

env('./.env');

var agent = [
    'forward',
    'backward',
    'left',
    'right',
    'stop',
    'servo1Min',
    'servo1Max',
    'servo2Min',
    'servo2Max'
];

module.exports = agent; 

