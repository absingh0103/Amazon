// Here We define middleware to Authenticate cookie and Secret key or token

const jwt = require("jsonwebtoken");
const USER = require("../models/userSchema");
const Key = process.env.KEY;

const Authentication = async (req, resp, next) => {
  try {
    const cookieToken = req.cookies.Amazonapp;
    const verifyToken = jwt.verify(cookieToken, Key);
    // If Verified We get Id and this Id is used to find the user

    // Now to Find user
    const rootUser = await USER.findOne({
      _id: verifyToken._id,
      "tokens.token": cookieToken,
    });
    console.log(rootUser);
    if (!rootUser) {
      throw new Error("User not Found");
    }

    // if user Request for then id or user
    req.token = cookieToken;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
    next();
  } catch (error) {
    resp.status(401).send("Unauthorized : NO token Provided");
    console.log(error);
  }
};

module.exports = Authentication;
  