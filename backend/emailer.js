'use strict';
const nodemailer = require('nodemailer');
const mail_auth = require('./auth');

//Config options for the SMTP. See https://nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/
const smtpConfig = {
    service: 'mailgun',
    auth: mail_auth
};



const transporter = nodemailer.createTransport(smtpConfig);

function sendOrderEmail(incomingFormData) {
  console.log(incomingFormData);
  console.log(smtpConfig);
  // setup e-mail data with unicode symbols. This needs to be adjusted for incoming data - e.g. incomingFormData.to, incomingFormData.text, etc.
  const mailOptions = {
    from: '"Claires Photography Orders" <clairesphotosoak@gmail.com>', // sender address
    to: 'novelapproachesdevelopment@gmail.com', // list of receivers - currently testing with personal email
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world</b>' // html body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      return false;
    }
    console.log('Message sent: ' + info.response);
  });
}

module.exports = {
  sendOrderEmail: sendOrderEmail
};
