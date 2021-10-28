const express = require("express");

const { port, secretkey } = require("./config/app");
// const path = require("path");

const indexRoutes = require("./routes/index.routes");

const app = express();

//const publicDirectory = path.join(__dirname, "./public");
//app.use(express.static(publicDirectory));

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

console.log("Hello");

// From Index.Routes
app.use("/", indexRoutes);

app.listen(port);
