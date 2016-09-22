var Omnius = require('../cylon-index');
Omnius.devices = require('../devices');

module.exports = function(){
    after((0.1).seconds(), function () {

        Omnius.devices.servo4.angle(180);
    });
    after((0.5).seconds(), function () {

        Omnius.devices.servo5.angle(0);
    });
    after((1).seconds(), function () {

        Omnius.devices.servo6.angle(90);
    });
};