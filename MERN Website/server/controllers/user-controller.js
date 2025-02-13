const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        msg: "Name , Email & Password required !",
        ok: false,
      });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        msg: "Email already exists !",
        ok: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return res.status(400).json({
        msg: "Error while hashing password !",
        ok: false,
      });
    }

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const newUser = await user.save();

    if (!newUser) {
      return res.status(400).json({
        msg: "Error while saving the user in database !",
        ok: false,
      });
    }

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    if (!token) {
      return res.status(400).json({
        msg: "Error while generating token !",
        ok: false,
      });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "None",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res
      .status(201)
      .json({ msg: "Sign Up Successfull !", data: newUser, ok: true });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error in signup !",
      err: error.message,
      ok: false,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Email & Password required !",
        ok: false,
      });
    }

    const emailExists = await User.findOne({ email });

    if (!emailExists) {
      return res.status(400).json({
        msg: "Please Sign Up first !",
        ok: false,
      });
    }

    const passwordMatched = await bcrypt.compare(
      password,
      emailExists.password
    );

    if (!passwordMatched) {
      return res.status(400).json({
        msg: "Invalid credentials !",
        ok: false,
      });
    }

    const token = jwt.sign({ id: emailExists._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    if (!token) {
      return res.status(400).json({
        msg: "Error while generating token !",
        ok: false,
      });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "None",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res
      .status(200)
      .json({ msg: "User logged Successfully !", data: emailExists, ok: true });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error in login !",
      err: error.message,
      ok: false,
    });
  }
};

exports.logout = async (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    secure: false,
    sameSite: "None",
    path: "/",
    maxAge: 0,
  });

  res.status(200).json({ msg: "User logged Out !", ok: true });
};

/*

1. User will type data in form- (name , email , password)
2. Click Submit
3. Data is send to Backend - (controller)
4. we will check if name , email , password is present
5. Check if email is present or not in database
6. Hash the password
7. save the new user to database
8. generate a new token
9. add the token in httpOnly cookie - (server side)
10. send response to frontend.
11. User will be toast message.

 */
