var env = require('node-env-file'),
    cylon = require('cylon'),
    utils = cylon.Utils,
    agent = require('./agent'),
    curl = require('curlrequest');
env('./.env');
var express = require('express');
var controls = express();
agent.forEach(function(item){
    controls.get("/"+item, function (req, res) {
        curl.request('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/'+item, function (err) {
            res.json({
                'direction': item,
                'time': new Date()
            });
            console.log('http://' + process.env.CYLON_HOST + ':' + process.env.CYLON_PORT + '/api/robots/' + process.env.ROBOT_NAME + '/commands/'+item);
        });
    });
});
module.exports = controls;