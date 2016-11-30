'use strict';
const Express = require('express');
const Request = require('request');
const BodyParser = require('body-parser');
const Path = require('path');
const API = require('./api_be');
const Server = Express();
const Emailer = require('emailer.js')

Server.use(Express.static(Path.join(__dirname + '/static')));

Server.use(BodyParser.json());

Server.get('/images', (req, res) => {
  let url = `${API.admin_url}/resources/image`;
  Request(url, (error, response, body) => {
    res.send(JSON.parse(body).resources.map(obj => obj.secure_url));
  });
});

Server.get('/orders', (req, res) => {
  let emailed = Emailer.sendOrderEmail(req.body) //to-do figure out how the data is coming from the front end. Also the email action should be async, make this a promise.

  Request(url, (error, response, body) => {
    res.send(JSON.parse(body, emailed));
  });
});

if (module === require.main) {
  var server = Server.listen(process.env.PORT || 8000, function () {
    var port = server.address().port;
    console.log('Node Server listening on port %s', port);
  });
}

module.exports = server;
