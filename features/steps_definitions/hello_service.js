module.exports = function () {
  var supertest = require('supertest');
  var servers = require('../../index');
  var myName, response, server;

  this.Given(/^My name is "(.*)"$/, function (name, callback) {
    myName = name;
    callback();
  });

  this.When(/^I am calling the hello service using (express|restify)$/, function (fwName, callback) {
    server = servers[fwName];
    response = supertest(server)
      .post('/hello')
      .set('Accept', 'text/plain')
      .send({ name: myName });
    callback();
  });

  this.When(/^I am calling the hello service using hapi$/, function (callback) {
    server = servers.hapi;
    var req = {  
      method: 'POST',
      url: '/hello',
      payload: JSON.stringify({name: myName})
    };
    server.inject(req, function(res) {  
      response = res
      callback();
    });
  });

  this.Then(/^The response should be "(.*)"$/, function (expectedResponse, callback) {
    if(typeof response.expect == 'function') {
      response
        .expect(200)
        .expect(expectedResponse, callback);
    }
    else if(typeof response.payload != 'undefined') {
      callback(response.payload == expectedResponse ? null : 'Got response "'+response.payload+'" but was expecting "'+expectedResponse+'"');
    }
  });
};