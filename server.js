const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("build"));
app.use(cors());
app.options("*", cors());

app.post("/send", (req, res) => {
  console.log("Data: ", req.body);
  const output = `
<p>You have a new message</p>
<h3>Contact Details</h3> 
<ul>
  <li>Fisrt Name: ${req.body.fullName} </li>
  <li>Phone: ${req.body.phone} </li>
  <li>Email: ${req.body.email} </li>
  <li>Zip-code: ${req.body.zipcode} </li>
</ul>
`;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "https://ellas-bubbles2.herokuapp.com/",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "", // generated ethereal user
      pass: "", // generated ethereal password
    },
    tls: {
      rejectUnautorized: false,
    },
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"" <>', // sender address
    to: "", // list of receivers
    subject: "Message", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer(getTestMessageUrl(info)))
  });
  res.json({ message: "Message received!!!" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
