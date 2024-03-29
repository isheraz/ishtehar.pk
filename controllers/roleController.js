const db = require("../models");

module.exports.createNew = async (req, res) => {
  console.log(req.body);

  const newRoleBody = {
    name: req.body.name,
  };

  try {
    const newRole = await db.Role.create(newRoleBody);
    res.status(201).json(newRole);
  } catch (err) {
    res.status(400).send("Role Not Created");
  }

  console.log("Log in here");
};
