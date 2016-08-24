/**
 * Created by jeremyrobles on 8/22/16.
 */

var Omnius = require('../cylon-index');
Omnius.devices = require('../devices');


module.exports = function() {
    after((0.1).seconds(), function () {
        Omnius.devices.servo1.angle(0);
    });    
    after((0.2).seconds(), function () {
        Omnius.devices.servo2.angle(180);
    });
    after((0.3).seconds(), function () {
        Omnius.devices.servo3.angle(0);
    });

};
// module.exports = Omnius.liftLeftArm;