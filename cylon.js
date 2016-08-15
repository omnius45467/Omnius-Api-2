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
	work: function(){
	},
	commands: function() {
		return {
			say_hello: this.hello,
			forward: this.forward,
			backward: this.backward,
			left: this.left,
			right: this.right,
			stop: this.stop
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
	}

});

module.exports = Omnius;