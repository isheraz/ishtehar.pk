const db = require("../models");

module.exports.categoryList_get = async (req, res) => {
  try {
    const categories = await db.Categories.findAll();
    console.log(categories);
    res.status(201).json(categories);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error to find Categories");
  }
};
