var Omnius = require('../cylon-index');

module.exports = function(){
    console.log('forward');
    Omnius.connections.arduino.pinMode(10, 'OUTPUT');
    Omnius.connections.arduino.pinMode(9, 'OUTPUT');
    Omnius.connections.arduino.pinMode(8, 'OUTPUT');
    Omnius.connections.arduino.pinMode(7, 'OUTPUT');
    Omnius.connections.arduino.pinMode(6, 'OUTPUT');
    Omnius.connections.arduino.pinMode(5, 'OUTPUT');
    after((0.1).seconds(), function() {
        Omnius.connections.arduino.digitalWrite(10, 0);
        Omnius.connections.arduino.digitalWrite(7, 0);
        Omnius.connections.arduino.digitalWrite(9, 0);
        Omnius.connections.arduino.digitalWrite(8, 0);
        Omnius.connections.arduino.digitalWrite(6, 0);
        Omnius.connections.arduino.digitalWrite(5, 0);
    });
};