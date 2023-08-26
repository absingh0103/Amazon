const mongoose = require("mongoose");
// npm i validator Package to validate Our Entry Field  (It can Validate Only string data)
// There are various other Validator that we can use to validate Our data
const validator = require("validator");
// For Password Encryption npm i bcryptjs package is used
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Key = process.env.KEY;

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
    // trim remove Spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not valid Email Adderss");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: [],
});

// Creating a middleware For Password Encryption Using bcrypt module
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// Generating JWT token
userSchema.methods.generateAuthToken = async function () {
  try {
    // .sign(payload,key,tokenExpire)
    let _token = jwt.sign({ _id: this._id }, Key);
    // To store Token in user data Token section that we have Created with each user
    //  tokens: [
    //  {
    //   token: {
    //     type: String,
    //       required: true,
    //     },
    //   },
    // ],
    this.tokens = this.tokens.concat({ token: _token });
    // to save
    await this.save();
    return _token;
  } catch (error) {
    console.log(error);
  }
};

// Adding Data To Cart
userSchema.methods.addtoCart = async function (cart) {
  try {
    this.carts = this.carts.concat(cart);
    await this.save();
    return this.carts;
  } catch (error) {
    console.log(error);
  }
};

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
