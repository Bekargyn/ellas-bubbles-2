const express = require("express");
const fs = require("fs");
const http = require("http");
const PORT = process.env.PORT || 8080;
const app = express();
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(express.static("build"));

fs.readFile("./build/index.html", function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function (request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  });

  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
