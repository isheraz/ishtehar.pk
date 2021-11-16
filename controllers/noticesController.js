const db = require("../models");

module.exports.all_notices = async (req, res) => {
  try {
    const notices = await db.Notice.findAll();
    console.log(notices);
    res.status(201).json(notices);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error to find Notices");
  }
};
