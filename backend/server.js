'use strict';
const Express = require('express');
const Server = Express();
const Request = require('request');
const BodyParser = require('body-parser');
const Path = require('path');

const API = require('./api_be');
const Emailer = require('./emailer');

const Mailgun = require('mailgun').Mailgun;
const mg = new Mailgun(API.mailgun)

Server.use(Express.static(Path.join(__dirname + '/static')));
Server.use(BodyParser.json());

//TODO figure out what is going on here, and make sure we are actually grabbing photos.
Server.get('/images', (req, res) => {
  const parse = (url) => {
    const query = `/upload/w_800,c_fill`;
    return url.split('/upload').join(query);
  }
  let url = `${API.admin_url}/resources/image`;
  Request(url, (error, response, body) => {
    let data = JSON.parse(body).resources;
    data.forEach( (obj) => {
      obj.selected = false;
      obj.url = parse(obj.url);
      obj.secure_url = parse(obj.secure_url);
    });

    res.send(data);
  });
});

Server.post('/order', (req, res) => {
  // console.log(req.body);
  const send = (response) => res.send(response);
  Emailer.sendOrderEmail(req.body, send)

  // const send = (response) => console.log(response);
  // Emailer.sendOrderEmail(req.body, send)
});

Server.post('/hello', (req, res, next) => {
  const servername = '';
  const options = {};
  console.log('HERE');
  mg.sendText(
    // From
    '"Claires Photography Orders" <clairesphotosoak@gmail.com>',
    // To
    'novelapproachesdevelopment@gmail.com',
    // Subject
    'Hello World!',
    // Body
    'Mailgun on Google App Engine with Node.js',
    // 'https://api.mailgun.net/v3/sandbox44ddf02b5433449d8f1e314174949ced.mailgun.org',
    'https://api.mailgun.net/v3/mg.clairesphotoemail.com',
    // 'https://api.mailgun.net/v3',
    options,
    (err) => {
      if (err) {
        console.log(err);
      }
      // Render the index route on success
    }
  );
});

Server.get('/*', (req, res) => {
  res.redirect('/');
});

let server;
if (module === require.main) {
  server = Server.listen(process.env.PORT || 8080, () => {
    const PORT = server.address().port;
      console.log('Node Server listening on port %s', PORT);
  });
}

module.exports = server;
