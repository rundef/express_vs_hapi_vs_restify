var apiBenchmark = require('api-benchmark');
var fs = require('fs');

var services = {
  express:  "http://127.0.0.1:3000",
  hapi:     "http://127.0.0.1:3001",
  restify:  "http://127.0.0.1:3002"
};

var routes = { 
  hello: {
    method: 'post',
    route: 'hello',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: 'world',
    }
  }
};

var options = {
  minSamples: 1000,
  maxConcurrentRequests: 10,
  runMode: 'parallel'
};

console.log('Running benchmark ...');

apiBenchmark.compare(services, routes, options, function(err, results) {
  apiBenchmark.getHtml(results, function(error, html){
    fs.writeFile("./benchmark.html", html, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("Benchmark results saved in benchmark.html");
    }); 
  });
});