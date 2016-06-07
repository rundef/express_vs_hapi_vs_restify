var servers = {};

// ---------------- express ----------------




// ---------------- hapi ----------------




// ---------------- restify ----------------

var restify = require('restify');

servers.restify = restify.createServer();
servers.restify.use(restify.jsonp());
servers.restify.use(restify.bodyParser({ mapParams: true }));

servers.restify.post('/hello', function respond(req, res, next) {
  res.send(`Hello ${req.params.name}`);
});

servers.restify.listen(3002, function() {
  console.log('restify server listening at %s', servers.restify.url);
});


module.exports = servers;