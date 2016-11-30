'use strict';

module.exports = {
  const nodemailer = require('nodemailer');

  // create reusable transporter object using the default SMTP transport
  const smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: 'clairesphotosoak@gmail.com',
          pass: 'novelapproaches' //TODO obfuscate this email PW, the account is a trash gmail account for now, so no risk is assumed.
      }
  };

  const transporter = nodemailer.createTransport(smtpConfig);

  // setup e-mail data with unicode symbols
  const mailOptions = {
      from: '"Claires Photography Orders" <clairesphotosoak@gmail.com>', // sender address
      to: 'dacooperfish@gmail.com', // list of receivers - currently testing with personal email
      subject: 'Hello ✔', // Subject line
      text: 'Hello world 🐴', // plaintext body
      html: '<b>Hello world 🐴</b>' // html body
  };



  // send mail with defined transport object
  sendOrderEmail() {
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return false; 
        }
        console.log('Message sent: ' + info.response);
    });
  }
};
