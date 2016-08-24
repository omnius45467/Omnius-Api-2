/**
 * Created by jeremyrobles on 8/22/16.
 */
var forward = require('./forward');
var backward = require('./backward');
var right = require('./right');
var left = require('./left');
var stop = require('./stop');
var liftLeftArm = require('./liftLeftArm');

var movements = {};
movements.liftLeftArm = liftLeftArm;
movements.forward = forward;
movements.backward = backward;
movements.right = right;
movements.left = left;
movements.stop = stop;

module.exports = movements;