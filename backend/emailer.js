'use strict';
const nodemailer = require('nodemailer');
const mail_auth = require('./auth');

//Config options for the SMTP. See https://nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/
const smtpConfig = {
  service: 'gmail',
  auth: mail_auth
};

const makeHTML = (obj) => {
  let html = ''
  let order = obj.order;
  let total = 0;
  let prices = {
    '4x6': 10,
    '5x7': 15,
    '8x10': 20
  }
  // console.log(order);
  for (var name in order) {
    let photo = order[name];
    let photoHTML = `<p>${name}:<br/><br/>`
    for (var size in photo.quantity){
      total += prices[size] * photo.quantity[size];
      photoHTML += `${size}: ${photo.quantity[size]}<br/>`
    }
    photoHTML += '</p>'
    html += photoHTML
  }
  html += `<p>Total: $${total}.00</p>`
  return html
}

const transporter = nodemailer.createTransport(smtpConfig);

module.exports = {
  sendOrderEmail(incomingFormData, action) {
    let body = makeHTML(incomingFormData);
    // setup e-mail data with unicode symbols. This needs to be adjusted for incoming data - e.g. incomingFormData.to, incomingFormData.text, etc.
    const mailOptions = {
        from: '"Claires Photography Orders" <clairesphotosoak@gmail.com>', // sender address
        to: 'dacooperfish@gmail.com', // list of receivers - currently testing with personal email
        subject: 'Photo Print Order', // Subject line
        html: body// html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return false;
        }
        action('Message sent: ' + info.response);
    });
  }
};
