var cylon = require('./cylon');
var ngrok = require('ngrok');
var env = require('node-env-file');
env('./.env');
ngrok.connect({
    proto: 'http', // http|tcp|tls 
    addr: process.env.API_PORT, // port or network address
    subdomain: process.env.NGROK_SUBDOMAIN, // reserved tunnel name https://alex.ngrok.io
    authtoken: process.env.AUTH_TOKEN,
    region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us 
}, function (err, url) {
    if(!err){
        console.log(url);
    }else {
        console.log(err);
    }
});
cylon.start();