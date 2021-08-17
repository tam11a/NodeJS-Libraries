var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gamezone.tam11a@gmail.com',
        pass: '12riothomas'
    }
  });

  let message = {
    from: "gamezone.tam11a@gmail.com",
    to: "ibrahimsadiktamim@gmail.com",
    subject: "Confirmation Message",
    text: "I hope this message gets read!",
  };

  transporter.sendMail(message, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });