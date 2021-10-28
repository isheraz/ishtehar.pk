const db = require("../models");
const { Validator } = require("node-input-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { secretkey } = require("../config/app");

module.exports.signup_get = (req, res) => {
  res.send("Sign Up render here");
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  const user = {
    email: email,
    password: password,
  };
  const existingUser = await db.User.findAll({
    where: {
      email: email,
    },
  });
  if (existingUser.length === 0) {
    res.status(400).send("User does not exist with this email");
  } else {
    const matchPassword = await bcrypt.compare(
      password,
      existingUser[0].dataValues.password
    );
    if (!matchPassword) {
      res.status(400).send("Invalid email or password!");
    } else {
      //res.status(201).json(user);
      if (existingUser[0].dataValues.roleID === 1) {
        console.log("Super Admin");
        jwt.sign(user, secretkey, { expiresIn: "24h" }, (err, token) => {
          res.json({
            user,
            token,
          });
        });
      } else if (existingUser[0].dataValues.roleID === 2) {
        console.log("Admin");
        jwt.sign(user, secretkey, { expiresIn: "24h" }, (err, token) => {
          res.json({
            user,
            token,
          });
        });
      } else if (existingUser[0].dataValues.roleID === 3) {
        console.log("Publisher");
        jwt.sign(user, secretkey, { expiresIn: "24h" }, (err, token) => {
          res.json({
            user,
            token,
          });
        });
      }
    }
  }
};

module.exports.signup_post = async (req, res) => {
  const inputs = req.body;
  console.log(inputs);

  const v = new Validator(req.body, {
    email: "required|email|uniqueUserEmail",
    password: "required|minLength:6",
    firstName: "required|string",
    phone: "phoneNumber|minLength:11|maxLength:11",
    CNIC: "required|integer|minLength:13|maxLength:13",
  });

  v.check().then((matched) => {
    if (!matched) {
      res.status(422).send(v.errors);
    }
  });

  const newRoleID = 3;
  const {
    address,
    CNIC,
    city,
    country,
    email,
    firstName,
    lastName,
    password,
    phone,
  } = req.body;

  const newUser = {
    roleID: newRoleID,
    address: address,
    CNIC: CNIC,
    city: city,
    country: country,
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
    phone: phone,
  };

  const oldUser = await db.User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  try {
    const newUserInsert = await db.User.create(newUser);
    const user = {
      email: email,
      password: password,
    };
    jwt.sign(user, secretkey, { expiresIn: "24h" }, (err, token) => {
      res.json({
        newUserInsert,
        token,
      });
      //res.status(201).json(newUserInsert);
    });
  } catch (err) {
    res.status(400).send("User Not Created");
  }

  //res.send("Sign Up here");
};

module.exports.role_create_post = async (req, res) => {
  const newRoleInsert = {
    name: req.body.name,
  };
  try {
    const newRole = await db.Role.create(newRoleInsert);
    res.status(201).json(newRole);
  } catch (err) {
    console.log(err);
    res.status(400).send("Role Not Created");
  }

  res.send("Log in here");
};
