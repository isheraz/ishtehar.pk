const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: 5000,
  secretkey: "thisismysecretkey",
  refreshkey: "thisismyrefreshsecretkey",
};
