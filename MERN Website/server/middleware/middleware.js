const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ msg: "No token in auth !", ok: false });
    }

    const tokenVerified = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenVerified) {
      return res
        .status(400)
        .json({ msg: "Token is not verified !", ok: false });
    }

    const userExists = await User.findById(tokenVerified.id).select(
      "-password"
    );

    if (!userExists) {
      return res.status(400).json({ msg: "User does not exists !", ok: false });
    }

    req.user = userExists;
    next();
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server error in auth !",
      err: error.message,
      ok: false,
    });
  }
};

module.exports = auth;

/*

/protected , return protected things

1. user tries to acces route from frontend
2. request goes to protected route in backend.
3. middle ware wil run
4. if user is authenticated or not
5. protected controller

 */
