var Cylon = require('cylon');
var api = require('./api');
var env = require('node-env-file');

env('./.env');

Cylon.api = api;

var Omnius = Cylon.robot({
	name: process.env.ROBOT_NAME,
	connections: {
		arduino: { adaptor: 'firmata', port: process.env.ARDUINO_PORT }
	},
	devices: {
		servo1: { driver: 'servo', pin: 2 },
		servo2: { driver: 'servo', pin: 3 },
		servo3: { driver: 'servo', pin: 4 },
		// head: { driver: 'servo', pin: 5 },
		servo4: { driver: 'servo', pin: 11 },
		servo5: { driver: 'servo', pin: 12 },
		servo6: { driver: 'servo', pin: 13 }
	},
	work: function(){
	},
	commands: function() {
		return {
			say_hello: this.hello,
			forward: this.forward,
			backward: this.backward,
			headCenter: this.headCenter,
			headRight: this.headRight,
			headLeft: this.headLeft,
			left: this.left,
			right: this.right,
			stop: this.stop,
			servo1Min: this.servo1Min,
			servo1Max: this.servo1Max,
			servo2Min: this.servo2Min,
			servo2Max: this.servo2Max,
			servo3Min: this.servo3Min,
			servo3Max: this.servo3Max,
			servosMin: this.servosMin,
			servosMax: this.servosMax,
			liftLeftArm: this.liftLeftArm,
			liftRightArm: this.liftRightArm,
			lowerLeftArm:this.lowerLeftArm,
			lowerRightArm:this.lowerRightArm,
			wave: this.wave
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
			Omnius.connections.arduino.digitalWrite(9, 1);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(7, 1);
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
			Omnius.servo1.angle(180);
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
			Omnius.servo2.angle(180);
		});
	},
	servo3Min: function(){
		console.log('servo-3-min');
		after((0.1).seconds(), function(){
			Omnius.servo3.angle(0);
		});
	},
	servo3Max: function(){
		console.log('servo-3-max');
		after((0.1).seconds(), function(){
			Omnius.servo3.angle(180);
		});
	},
	servosMin: function(){
		after((0.1).seconds(), function(){
			console.log('servos min');
			Omnius.servo1.angle(0);
			Omnius.servo2.angle(0);
			Omnius.servo3.angle(0);
		});
	},
	servosMax: function() {
		after((0.1).seconds(), function () {
			console.log('servos max');
			Omnius.servo1.angle(180);
			Omnius.servo2.angle(180);
			Omnius.servo3.angle(180);
		});
	},
	headCenter: function(){
		after((0.1).seconds(), function () {
			console.log('head center');
			// Omnius.head.angle(90);
		});
	},
	headRight: function(){
		after((0.1).seconds(), function () {
			console.log('head right');
			// Omnius.head.angle(0);
		});
	},
	headLeft: function(){
		after((0.1).seconds(), function () {
			console.log('head left');
			// Omnius.head.angle(180);
		});
	},
	lowerLeftArm: function(){
		after((0.1).seconds(), function () {
			console.log('max on left servo 1');
			Omnius.servo1.angle(180);
		});
		after((0.2).seconds(), function () {
			console.log('max on left servo 2');
			Omnius.servo2.angle(180);
		});
		after((0.3).seconds(), function () {
			console.log('max on left servo 3');
			Omnius.servo3.angle(0);
		});
	},
	liftLeftArm: function(){
		after((0.1).seconds(), function () {
			console.log('max on left servo 1');
			Omnius.servo1.angle(0);
		});
		after((0.2).seconds(), function () {
			console.log('max on left servo 2');
			Omnius.servo2.angle(180);
		});
		after((0.3).seconds(), function () {
			console.log('max on left servo 3');
			Omnius.servo3.angle(0);
		});
	},
	liftRightArm: function(){
		after((0.1).seconds(), function () {
			console.log('max on left servo 4');
			Omnius.servo4.angle(180);
		});
		after((0.2).seconds(), function () {
			console.log('max on left servo 5');
			Omnius.servo5.angle(0);
		});
		after((0.3).seconds(), function () {
			console.log('max on left servo 6');
			Omnius.servo6.angle(90);
		});
	},
	lowerRightArm: function(){
		after((0.1).seconds(), function () {
			console.log('max on left servo 4');
			Omnius.servo4.angle(0);
		});
		after((0.2).seconds(), function () {
			console.log('max on left servo 5');
			Omnius.servo5.angle(0);
		});
		after((0.3).seconds(), function () {
			console.log('max on left servo 6');
			Omnius.servo6.angle(90);
		});
	},
	wave: function(){
		after((0.1).seconds(), function () {
			Omnius.servo6.angle(0);
		});
		after((0.3).seconds(), function () {
			Omnius.servo6.angle(180);
		});
		after((1).seconds(), function () {
			Omnius.servo6.angle(0);
		});
		after((0.3).seconds(), function () {
			Omnius.servo6.angle(180);
		});
		after((1).seconds(), function () {
			Omnius.servo6.angle(0);
		});
		after((0.3).seconds(), function () {
			Omnius.servo6.angle(180);
		});
		after((1).seconds(), function () {
			Omnius.servo6.angle(0);
		});
	}
});

module.exports = Omnius;