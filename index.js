var servers = {};


// ---------------- express ----------------


var express = require('express');
var bodyParser = require('body-parser');

servers.express = express();

servers.express.use(bodyParser.json());
servers.express.post('/hello', function(req, res){
  res.send('Hello ' + req.body.name);
});

var expressServer = servers.express.listen(3000, function() {
  //console.log('express server listening on port %d', expressServer.address().port);
});


// ---------------- hapi ----------------


var Hapi = require('hapi');
servers.hapi = new Hapi.Server();
servers.hapi.connection({ port: 3001 });

servers.hapi.route({
  method: 'POST',
  path: '/hello',
  handler: function(request, reply) {
    reply('Hello ' + request.payload.name);
  }
});

servers.hapi.start(function () {
  //console.log('hapi server listening at %s', servers.hapi.info.uri);
});


// ---------------- restify ----------------


var restify = require('restify');

servers.restify = restify.createServer();
servers.restify.use(restify.jsonp());
servers.restify.use(restify.bodyParser({ mapParams: true }));

servers.restify.post('/hello', function respond(req, res, next) {
  res.send('Hello ' + req.params.name);
});

servers.restify.listen(3002, function() {
  //console.log('restify server listening at %s', servers.restify.url);
});


module.exports = servers;