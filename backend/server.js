'use strict';
const Express = require('express'),
      Server = Express();
const Request = require('request');
const BodyParser = require('body-parser');
const Path = require('path');

const API = require('./api_be');
const Emailer = require('./emailer');


Server.use(Express.static(Path.join(__dirname + '/static')));
Server.use(BodyParser.json());


// 'images' Endpoint:
Server.get('/images', (req, res) => {
  let url = `${API.admin_url}/resources/image`;
  Request(url, (error, response, body) => {
    let data = JSON.parse(body).resources;
    data.forEach(obj => obj.selected = false);
    res.send(data);
  });
});

// 'order' Endpoint:
Server.post('/order', (req, res) => {
  console.log(req.body);
  let emailed = Emailer.sendOrderEmail(req.body)
  console.log('HERE');
  console.log(emailed);
  res.send(JSON.parse(emailed));
});

// Wilcard route redirects to landing page:
Server.get('/*', (req, res) => {
  res.redirect('/');
});

let server;
if (module === require.main) {
  server = Server.listen(process.env.PORT || 8000, () => {
    const PORT = server.address().port;
      console.log('Node Server listening on port %s', PORT);
  });
}

module.exports = server;
