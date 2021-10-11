const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./config/database");

// Test DB
const init = async () => {

try{
  const connectionResp = await db.authenticate();

  const app = express();

  app.get("/", (req, res) => res.send("INDEX"));

  //User Routes

  app.use("/user", require("./routes/user"));

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
}catch (err) {

}
}
init();