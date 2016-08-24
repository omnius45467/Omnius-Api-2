var Cylon = require('cylon');
var api = require('./api');
var env = require('node-env-file');
var devices = require('./devices');
var movements = require('./movements');

env('./.env');

Cylon.api = api;
var Omnius = Cylon.robot({
	name: process.env.ROBOT_NAME,
	connections: {
		arduino: { adaptor: 'firmata', port: process.env.ARDUINO_PORT }
	},
	devices: devices,
	work: function(){
	},
	commands: function() {
		return {
			say_hello: this.hello,
			forward: movements.forward,
			backward: movements.backward,
			left: movements.left,
			right: movements.right,
			stop: movements.stop,
			headCenter: this.headCenter,
			headRight: this.headRight,
			headLeft: this.headLeft,
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
			wave: this.wave,
			lowerArms: this.lowerArms,
			liftArms: this.liftArms
		};
	},
	hello: function(){
		every((1).seconds, function(){
			console.log("hello, humans!");
		});
	},
	servo1Min: function(){
		after((0.1).seconds(), function(){
			Omnius.servo1.angle(0);
		});
	},
	servo1Max: function(){
		after((0.1).seconds(), function(){
			Omnius.servo1.angle(180);
		});
	},
	servo2Min: function(){
		after((0.1).seconds(), function(){
			Omnius.servo2.angle(0);
		});
	},
	servo2Max: function(){
	
		after((0.1).seconds(), function(){
			Omnius.servo2.angle(180);
		});
	},
	servo3Min: function(){
	
		after((0.1).seconds(), function(){
			Omnius.servo3.angle(0);
		});
	},
	servo3Max: function(){

		after((0.1).seconds(), function(){
			Omnius.servo3.angle(180);
		});
	},
	servosMin: function(){
		after((0.1).seconds(), function(){

			Omnius.servo1.angle(0);
			Omnius.servo2.angle(0);
			Omnius.servo3.angle(0);
		});
	},
	servosMax: function() {
		after((0.1).seconds(), function () {
		
			Omnius.servo1.angle(180);
			Omnius.servo2.angle(180);
			Omnius.servo3.angle(180);
		});
	},
	headCenter: function(){
		after((0.1).seconds(), function () {
	
			// Omnius.head.angle(90);
		});
	},
	headRight: function(){
		after((0.1).seconds(), function () {
	
			// Omnius.head.angle(0);
		});
	},
	headLeft: function(){
		after((0.1).seconds(), function () {

			// Omnius.head.angle(180);
		});
	},
	lowerLeftArm: function(){
		after((0.1).seconds(), function () {

			Omnius.servo1.angle(180);
		});
		after((0.5).seconds(), function () {
		
			Omnius.servo2.angle(180);
		});
		after((1).seconds(), function () {

			Omnius.servo3.angle(0);
		});
	},
	liftLeftArm: function(){
		after((0.1).seconds(), function () {

			Omnius.servo1.angle(0);
		});
		after((0.5).seconds(), function () {

			Omnius.devices.servo2.angle(180);
		});
		after((1).seconds(), function () {
		
			Omnius.devices.servo3.angle(0);
		});
	},
	liftRightArm: function(){
		after((0.1).seconds(), function () {
		
			Omnius.servo4.angle(180);
		});
		after((0.5).seconds(), function () {
		
			Omnius.servo5.angle(0);
		});
		after((1).seconds(), function () {
		
			Omnius.servo6.angle(90);
		});
	},
	lowerRightArm: function(){
		after((0.1).seconds(), function () {
		
			Omnius.servo4.angle(0);
		});
		after((0.5).seconds(), function () {
	
			Omnius.servo5.angle(0);
		});
		after((1).seconds(), function () {
	
			Omnius.servo6.angle(90);
		});
	},
	lowerArms: function(){
		this.lowerLeftArm();
		this.lowerRightArm();
	},
	liftArms: function(){
		this.liftLeftArm();
		this.liftRightArm();
	},
	wave: function(){
		after((0.1).seconds(), function () {
			Omnius.servo4.angle(180);
			Omnius.servo5.angle(0);
			Omnius.servo6.angle(0);
		});
		after((0.3).seconds(), function () {

			Omnius.servo6.angle(180);
		});
		after((1).seconds(), function () {

			Omnius.servo6.angle(0);
		});
		after((1.1).seconds(), function () {

			Omnius.servo6.angle(180);
		});
		after((1.3).seconds(), function () {

			Omnius.servo6.angle(0);
		});
		after((1.5).seconds(), function () {

			Omnius.servo6.angle(180);
		});
		after((1.7).seconds(), function () {

			Omnius.servo6.angle(0);
		});
		after((2).seconds(), function () {

			Omnius.servo6.angle(180);
		});
		after((2.3).seconds(), function () {

			Omnius.servo6.angle(0);
		});
	}
});
module.exports = Omnius;