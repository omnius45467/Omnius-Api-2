var Cylon = require('cylon');
var api = require('./api');
var env = require('node-env-file');

env('./.env');

// Cylon.api('http', {
//   	host: process.env.HOST,
// 	port: process.env.PORT,
// 	ssl: false,
// 	auth: false
// });

Cylon.api = api;



var Omnius = Cylon.robot({
	name: process.env.ROBOT_NAME,
	connections: {
		arduino: { adaptor: 'firmata', port: process.env.ARDUINO_PORT }
	},
	devices: {
		pca9685: { driver: 'pca9685'},
		base: { driver: 'servo', pin: 3 },
		servo1: { driver: 'servo', pin: 2 },
		servo2: { driver: 'servo', pin: 4 }
	},
	work: function(){
	},
	commands: function() {
		return {
			say_hello: this.hello,
			forward: this.forward,
			backward: this.backward,
			left: this.left,
			right: this.right,
			stop: this.stop,
			servo1Min: this.servo1Min,
			servo1Max: this.servo1Max,
			servo2Min: this.servo2Min,
			servo2Max: this.servo2Max,
			servosMin: this.servosMin,
			servosMax: this.servosMax,
			baseMin: this.baseMin,
			baseMax: this.baseMax,
			baseCenter: this.baseCenter,
			pca: this.pca
		};
	},
	hello: function(){
		every((1).seconds, function(){
			console.log("hello, humans!");
		});
	},
	forward: function(){
		console.log('forward');
		Omnius.connections.arduino.pinMode(10, 'OUTPUT');
		Omnius.connections.arduino.pinMode(9, 'OUTPUT');
		Omnius.connections.arduino.pinMode(8, 'OUTPUT');
		Omnius.connections.arduino.pinMode(7, 'OUTPUT');
		Omnius.connections.arduino.pinMode(6, 'OUTPUT');
		Omnius.connections.arduino.pinMode(5, 'OUTPUT');
		after((0.1).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 1);
			Omnius.connections.arduino.digitalWrite(7, 1);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 1);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 1);
		});
		after((5).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	backward: function(){
		console.log('backward');
		Omnius.connections.arduino.pinMode(10, 'OUTPUT');
		Omnius.connections.arduino.pinMode(9, 'OUTPUT');
		Omnius.connections.arduino.pinMode(8, 'OUTPUT');
		Omnius.connections.arduino.pinMode(7, 'OUTPUT');
		Omnius.connections.arduino.pinMode(6, 'OUTPUT');
		Omnius.connections.arduino.pinMode(5, 'OUTPUT');
		after((0.1).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 1);
			Omnius.connections.arduino.digitalWrite(7, 1);
			Omnius.connections.arduino.digitalWrite(9, 1);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 1);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
		after((5).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	right: function(){
		console.log('right');
		Omnius.connections.arduino.pinMode(10, 'OUTPUT');
		Omnius.connections.arduino.pinMode(9, 'OUTPUT');
		Omnius.connections.arduino.pinMode(8, 'OUTPUT');
		Omnius.connections.arduino.pinMode(7, 'OUTPUT');
		Omnius.connections.arduino.pinMode(6, 'OUTPUT');
		Omnius.connections.arduino.pinMode(5, 'OUTPUT');
		after((0.1).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 1);
			Omnius.connections.arduino.digitalWrite(7, 1);
			Omnius.connections.arduino.digitalWrite(9, 1);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 1);
		});
		after((5).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	left: function(){
		console.log('left');
		Omnius.connections.arduino.pinMode(10, 'OUTPUT');
		Omnius.connections.arduino.pinMode(9, 'OUTPUT');
		Omnius.connections.arduino.pinMode(8, 'OUTPUT');
		Omnius.connections.arduino.pinMode(7, 'OUTPUT');
		Omnius.connections.arduino.pinMode(6, 'OUTPUT');
		Omnius.connections.arduino.pinMode(5, 'OUTPUT');
		after((0.1).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 1);
			Omnius.connections.arduino.digitalWrite(7, 1);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 1);
			Omnius.connections.arduino.digitalWrite(6, 1);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
		after((5).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	stop: function(){
		console.log('stop');
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
	},
	servo1Min: function(){
		console.log('servo-1-min');
		after((0.1).seconds(), function(){
			Omnius.servo1.angle(0);
		});
	},
	servo1Max: function(){
		console.log('servo-1-max');
		after((0.1).seconds(), function(){
			Omnius.servo1.angle(178);
		});
	},
	servo2Min: function(){
		console.log('servo-2-min');
		after((0.1).seconds(), function(){
			Omnius.servo2.angle(0);
		});
	},
	servo2Max: function(){
		console.log('servo-2-max');
		after((0.1).seconds(), function(){
			Omnius.servo2.angle(178);
		});
	},
	servosMin: function(){
		after((0.1).seconds(), function(){
			Omnius.servo1.angle(0);
			Omnius.servo2.angle(0);
		});
	},
	servosMax: function(){
		after((0.1).seconds(), function(){
			Omnius.servo1.angle(178);
			Omnius.servo2.angle(178);
		});
	},
	baseMin: function(){
		after((0.1).seconds(), function(){
			Omnius.base.angle(0);
		});
	},
	baseMax: function(){
		after((0.1).seconds(), function(){
			Omnius.base.angle(178);

		});
	},
	baseCenter: function(){
		after((0.1).seconds(), function(){
			Omnius.base.angle(90);

		});
	},
	pca: function() {

		var min = 700;
		var max = 1100;
		// set the frequency to 60hz
		Omnius.pca9685.setPWMFreq(60);

		// rotate to and hold the minium position
		Omnius.pca9685.setPWM(0, 0, min);

		after((5).seconds(), function() {
			// rotate to and hold the maxium position
			Omnius.pca9685.setPWM(0, 0, max);
		});

		after((10).seconds(), function() {
			// reset and stop all outputs
			Omnius.pca9685.stop();
		});
	}

});

module.exports = Omnius;