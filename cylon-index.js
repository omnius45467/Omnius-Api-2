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
			forward: this.forward,
			backward: this.backward,
			left: this.left,
			right: this.right,
			stop: this.stop,
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
			liftArms: this.liftArms,
			dance: this.dance
		};
	},
	forward: function(){
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
		after((2).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	backward:function(){
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
		after((2).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	left:function(){
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
		after((1).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(8, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	right:function(){

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
		after((1).seconds(), function() {
			Omnius.connections.arduino.digitalWrite(10, 0);
			Omnius.connections.arduino.digitalWrite(7, 0);
			Omnius.connections.arduino.digitalWrite(9, 0);
			Omnius.connections.arduino.digitalWrite(6, 0);
			Omnius.connections.arduino.digitalWrite(5, 0);
		});
	},
	stop:function(){
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
	
			Omnius.head.angle(90);
		});
	},
	headRight: function(){
		after((0.1).seconds(), function () {
	
			Omnius.head.angle(0);
		});
	},
	headLeft: function(){
		after((0.1).seconds(), function () {

			Omnius.head.angle(180);
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
		
			Omnius.servo6.angle(0);
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
		after((1).seconds(), function () {

			Omnius.servo6.angle(180);
		});
		after((1.5).seconds(), function () {

			Omnius.servo6.angle(0);
		});
		after((2).seconds(), function () {

			Omnius.servo6.angle(180);
		});
		after((2.5).seconds(), function () {

			Omnius.servo6.angle(0);
		});
		after((3).seconds(), function () {

			Omnius.servo6.angle(0);
		});
		after((3.3).seconds(), function() {
			Omnius.commands.lowerArms();
			
		});
	},
	dance: function(){
		after((0.1).seconds(), function(){
			Omnius.commands.headCenter();
			Omnius.commands.left();
			Omnius.commands.liftArms();
		});
		after((2).seconds(), function(){
			Omnius.commands.headLeft();
			Omnius.commands.left();
			Omnius.commands.wave();
		});
		after((4).seconds(), function(){
			Omnius.commands.right();
			Omnius.commands.lowerArms();
		});
		after((6).seconds(), function(){
			Omnius.commands.headRight();
			Omnius.commands.left();
			Omnius.commands.lowerArms();
		});
		after((8).seconds(), function(){
			Omnius.commands.headCenter();
			Omnius.commands.left();
			Omnius.commands.liftLeftArm();
		});
		after((10).seconds(), function(){
			Omnius.commands.headLeft();
			Omnius.commands.left();
			Omnius.commands.liftArms();
		});
		after((12).seconds(), function(){
			Omnius.commands.headCenter();
			Omnius.commands.left();
			Omnius.commands.lowerRightArm();
		});
		after((14).seconds(), function(){
			Omnius.commands.headLeft();
			Omnius.commands.left();
			Omnius.commands.liftLeftArm();
		});
		after((16).seconds(), function(){
			Omnius.commands.headCenter();
			Omnius.commands.lowerLeftArm();
			Omnius.commands.wave();
		});
	}
});
module.exports = Omnius;
