'use strict';
const Express = require('express');
const Request = require('request');
const BodyParser = require('body-parser');
const API = require('./api_be');
const Server = Express();

Server.use(BodyParser.json());

Server.get('/', function(req, res){
  console.log("Hello.  Node Server is running");
  res.send("Hello.  Node Server is running");
});

Server.get('/images', (req, res) => {
  let url = `${API.admin_url}/resources/image`;
  Request(url, (error, response, body) => {
    res.send(JSON.parse(body).resources.map(obj => obj.secure_url));
  });
});

if (module === require.main) {
  var server = Server.listen(process.env.PORT || 8000, function () {
    var port = server.address().port;
    console.log('Node Server listening on port %s', port);
  });
}

module.exports = server;
