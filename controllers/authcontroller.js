import User, { create, _id } from "./models/user.js";
import { sign } from "jsonwebtoken";
import cookieparper from "cookie-parser";
import { application } from "express";

//middleware
app.use(cookieparper);
app.use(express.json());

//Error Handler

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    UserEmail: "",
    UserPassword: "",
    UserFirstName: "",
    UserLastName: "",
    UserCity: "",
    UserCountry: "",
    UserAddress: "",
    UserCNIC: "",
    UserPhone: "",
    RoleID: "",
  };

  //duplicate error code
  if (err.code == 11000) {
    errors.UserEmail = "That email is already registred";
    return errors;
  }

  //validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return sign({ id }, "ishtehar net secret", {
    expiresIn: maxAge,
  });
};

export function signup_get(req, res) {
  res.render("signup");
}

export async function signup_post(req, res) {
  const {
    UserEmail,
    UserPassword,
    UserFirstName,
    UserLastName,
    UserCity,
    UserCountry,
    UserAddress,
    UserCNIC,
    UserPhone,
    RoleID,
  } = req.body;

  try {
    const user = await create({
      UserEmail,
      UserPassword,
      UserFirstName,
      UserLastName,
      UserCity,
      UserCountry,
      UserAddress,
      UserCNIC,
      UserPhone,
      RoleID,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json(User);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ user: _id });
  }

  module.exports.login_get = (req, res) => {
    res.render("login");
  };

  module.exports.login_post = async (req, res) => {
    const { UserEmail, UserPassword } = req.body;
    res.send("User login");
  };
}
