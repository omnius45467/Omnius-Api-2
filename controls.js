var env = require('node-env-file'),
    cylon = require('cylon'),
    utils = cylon.Utils,
    curl = require('curlrequest');

env('./.env');

var express = require('express');

var controls = express(); // the main app

controls.get("/forward", function (req, res) {
    curl.request('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/forward', function (err) {
        // if (!err) {
        //     res.sendStatus(200);
        res.json({
            'direction': 'forward'
        });
            console.log('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/forward');
        //
        // } else {
        //     throw err;
        // }
    });
});
controls.get("/backward", function (req, res) {
    curl.request('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/backward', function (err) {
        // if (!err) {

            // res.sendStatus(200);
        res.json({
            'direction': 'backward'
        });
            console.log('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/backward');

        // } else {
        //     throw err;
        // }
    });
});
controls.get("/left", function (req, res) {
    curl.request('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/left', function (err) {
        // if (!err) {
        //     res.sendStatus(200);
            res.json({
                'direction': 'left'
            });
            console.log('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/left');
        //
        // } else {
        //     throw err;
        // }
    });
});
controls.get("/right", function (req, res) {
    curl.request('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/right', function (err) {
        // if (!err) {
        //     res.sendStatus(200);
        res.json({
            'direction': 'right'
        });
            console.log('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/right');
        // } else {
        //     throw err;
        // }
    });
});
controls.get("/stop", function (req, res) {
    curl.request('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/stop', function (err) {
        // if (!err) {
        //     res.sendStatus(200);
        res.json({
            'direction': 'stop'
        });
        console.log('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/stop');
        // } else {
        //     throw err;
        // }
    });
});
module.exports = controls;