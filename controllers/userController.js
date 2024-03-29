const db = require("../models");
const { Validator } = require("node-input-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { secretkey } = require("../config/app");

module.exports.add_notice_post = async (req, res) => {
  const userID = 50;
  const categoryID = 5;
  const newnotice = {
    title: req.body.title,
    userID: userID,
    categoryID: categoryID,
    description: req.body.description,
    date: req.body.date,
  };
  try {
    const new_notice = await db.Notice.create(newnotice);
    res.status(201).json(new_notice);
  } catch (err) {
    console.log(err);
    res.status(400).send("Notices Not Created");
  }

  res.send("Notice render here");
};

module.exports.add_categories_post = async (req, res) => {
  const newcategories = {
    title: req.body.name,
  };
  try {
    const new_categories = await db.Categories.create(newcategories);
    res.status(201).json(new_categories);
  } catch (err) {
    console.log(err);
    res.status(400).send("Categories Not Created");
  }

  res.send("Categories Created here here");
};

module.exports.add_newspaper_post = async (req, res) => {
  const newspaper = {
    name: req.body.name,
  };
  try {
    const new_newspaper = await db.Newspaper.create(newspaper);
    res.status(201).json(new_newspaper);
  } catch (err) {
    console.log(err);
    res.status(400).send("News Paper Not Created");
  }

  res.send("Newspaper Created here here");
};

module.exports.updateNotice = async (req, res) => {
  res.send("Successfully Updated");
};

module.exports.updateUser_post = async (req, res) => {
  const newRoleID = 2;
  const { city, country, email, firstName, lastName } = req.body;

  const oldUser = await db.User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!oldUser) {
    return res.status(404).send("User Not Found");
  } else {
    db.User.update(
      {
        firstName: firstName,
        lastName: lastName,
        city: city,
        country: country,
        //roleID: roleID,
      },
      { where: { email: email } }
    )
      .then((updatedUser) => {
        console.log("user Updated Successfully", updatedUser);
        return res.send({
          email: email,
          firstName: firstName,
          lastName: lastName,
          city: city,
          country: country,
        });
      })
      .catch((err) => console.log("Error", err));

    return res.status(200).send("User Found");
  }
};
