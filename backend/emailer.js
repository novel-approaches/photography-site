'use strict';
const nodemailer = require('nodemailer');

//Config options for the SMTP. See https://nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/
const smtpConfig = {
    service: 'mailgun',
    auth: {
        user: 'postmaster@sandbox44ddf02b5433449d8f1e314174949ced.mailgun.org',
        pass: '788c1d71be0d0fdc88517c2a6ba364df' //TODO obfuscate this email PW, the account is a trash gmail account for now, so no risk is assumed.
    }
};
  const transporter = nodemailer.createTransport(smtpConfig);



module.exports = {
  sendOrderEmail(incomingFormData) {
    // setup e-mail data with unicode symbols. This needs to be adjusted for incoming data - e.g. incomingFormData.to, incomingFormData.text, etc.
    const mailOptions = {
        from: '"Claires Photography Orders" <clairesphotosoak@gmail.com>', // sender address
        to: 'dacooperfish@gmail.com', // list of receivers - currently testing with personal email
        subject: 'Hello ✔', // Subject line
        text: 'Hello world 🐴', // plaintext body
        html: '<b>Hello world 🐴</b>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return false;
        }
        console.log('Message sent: ' + info.response);
    });
  }
};
