var Cylon = require('cylon');
var env = require('node-env-file'),
    controls = require('./controls'),
    express = require("express"),
    http = require('http'),
    app = express();

env('./.env');

var OmniusApi = Cylon.api('http', {
    host: process.env.CYLON_HOST,
    port: process.env.CYLON_PORT,
    ssl: false,
    auth: false
});

app.use('/api', controls);

app.listen(
    process.env.API_PORT,
    process.env.API_HOST
);

module.exports = OmniusApi;