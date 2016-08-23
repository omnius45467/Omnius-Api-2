/**
 * Created by jeremyrobles on 8/15/16.
 */
var api = require('./api.js'),
    cylon = require('./cylon'),
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
    'servo2Max',
    'servo3Min',
    'servo3Max',
    'servosMin',
    'servosMax',
    'headCenter',
    'headRight',
    'headLeft',
    'liftLeftArm',
    'liftRightArm',
    'lowerLeftArm',
    'lowerRightArm',
    'wave'
];

module.exports = agent;