/**
 * Created by jeremyrobles on 8/15/16.
 */
var api = require('./api.js'),
    control = require('./controls'),
    cylon = require('./cylon'),
    comp = require("signal-control-utils").Comparison,
    env = require('node-env-file');

env('./.env');

