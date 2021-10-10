const express = require("express");
const cron = require("node-cron");
const mailer = require("nodemailer");
const fetch = require("node-fetch");
const { port, secretkey } = require("./config/app");
var cors = require("cors");
// const path = require("path");

const indexRoutes = require("./routes/index.routes");

const app = express();

//const publicDirectory = path.join(__dirname, "./public");
//app.use(express.static(publicDirectory));

// Email send with Nodemailer
// cron.schedule("*/30 * * * * *", () => {
//   console.log("Task is running every minute " + new Date());
// });
// Creating a transporter
const transporter = mailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "",
    pass: "",
  },
});

function sendEmail(message) {
  //sending the email
  transporter
    .sendMail({
      from: '"Peter" <peter@kayere.com>',
      to: '"sarmad.ali@invozone.com',
      subject: "Auto Send Test email",
      text: "Wow I have successfully sent an email",
    })
    .then((_) => {
      console.log("Email sent on " + new Date());
    })
    .catch((error) => {
      console.log(error);
    });
}

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

//expect(2 + 3).toBe(5);
console.log("Hello");

// From Index.Routes
app.use("/", cors(), indexRoutes);

app.listen(port);
