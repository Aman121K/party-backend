var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sagaryc111@gmail.com",
    pass: "xtrainn213"
  }
});

const mailOptions = {
  from: "sagaryc111@gmail.com", // sender address
  to: "sagaryc111@gmail.com", // list of receivers
  subject: "this is test", // Subject line
  html: "<p>Your html here</p>" // plain text body
};

const sendMail = transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});

module.exports = { sendMail };
