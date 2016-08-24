/**
 * Created by jeremyrobles on 8/22/16.
 */

var Omnius = require('../cylon-index');

module.exports = function() {
    after((0.1).seconds(), function () {
        console.log('max on left servo 1');
        Omnius.servo1.angle(0);
    });    
    after((0.2).seconds(), function () {
        console.log('max on left servo 2');
        Omnius.devices.servo2.angle(180);
    });
    after((0.3).seconds(), function () {
        console.log('max on left servo 3');
        Omnius.devices.servo3.angle(0);
    });

};
// module.exports = Omnius.liftLeftArm;