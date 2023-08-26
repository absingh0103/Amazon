// here we define all Api

const express = require("express");

const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const Authentication = require("../Middleware/authenticate");
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(
  "sk_test_51NiwNQSEfd8CTAm6HsYP02HNGjRZ417SlEgEVNJKwahsLdckeZbwBWHV0ZSRDxFhMAmehgQ2WPpv70eqwos6VUAI00U78ULVVq"
);
router.use(cookieParser());

// to get Product Details
router.get("/getproducts", async (req, resp) => {
  try {
    let productsdata = await Products.find({});
    resp.status(200).json(productsdata);
  } catch (error) {
    console.log(`error ${error.message}`);
  }
});

// Api to Fetch One Product Detail
router.get("/getoneproduct/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const productDetails = await Products.findOne({ id: id });
    resp.status(201).json(productDetails);
  } catch (error) {
    resp.status(400).json(productDetails);
    console.log(`error ${error.message}`);
  }
});

// Singup Api (Register APi)
router.post("/register", async (req, resp) => {
  const { fname, email, mobile, password, cpassword } = req.body;

  // checking if all Field Contains value or not
  if (!fname || !email || !mobile || !password || !cpassword) {
    resp.status(422).json({ error: "Fill all the Details" });
    console.log("Incomplete Data");
    return;
  }

  // Checking For Pre register User
  try {
    const preuser = await USER.findOne({ email: email });
    if (preuser) {
      resp.status(422).json({ error: "This user is already registered" });
    }
    // checking for password match
    else if (password !== cpassword) {
      resp.status(422).json({ error: "Password and cpassword not matched" });
    } else if (await USER.findOne({ mobile: mobile })) {
      resp.status(422).json({ error: "This user is already registered" });
    }

    // if Above both Condition are fasle then create a New User
    else {
      const finalUser = new USER({ fname, email, mobile, password, cpassword });

      // After Creating New User We need to Encrypt password or any other Security info
      // Before Save we need to encrypt

      // Here a middleware For password Encryption  is called which is defined in userSchema

      // storing data to DB
      const finalData = await finalUser.save();
      console.log(finalData);
      resp.status(201).json(finalData);
    }
  } catch (error) {
    resp.status(422).json({ error: "Invalid Details" });
  }
});

// Login user Api (SignIn)

router.post("/login", async (req, resp) => {
  const { email, password } = req.body;
  if (!email || !password) {
    resp.status(400).json({ error: "Fill all the Details" });
    return;
  }
  try {
    const validUser = await USER.findOne({ email: email });

    // When Email gets matched then check for password
    if (validUser) {
      // we Have to use bycrpt module to match password because it do not decrypt password
      // it matched with hash data
      const isPassMatch = await bcrypt.compare(password, validUser.password);

      if (!isPassMatch) {
        resp.status(400).json({ error: "Invalid Details" });
      } else {
        // Generating Token
        const token = await validUser.generateAuthToken();
        // console.log(token);

        // Once Token generated we Generate Cookie  7200000 milisec = 2hr
        resp.cookie("Amazonapp", token, {
          expires: new Date(Date.now() + 7200000),
          httpOnly: true,
        });

        // to send User details
        resp.status(201).json(validUser);
      }
    } else {
      resp.status(400).json({ error: "Invalid Details" });
    }
  } catch (error) {
    resp.status(400).json({ error: "Invalid Details" });
  }
});

// Add To Cart Api
router.post("/addcart/:id", Authentication, async (req, resp) => {
  try {
    const { id } = req.params;
    const cart = await Products.findOne({ id: id });
    console.log(cart);

    // After Token Verification middleware send user id hecne we find the user with that id
    const UserDetails = await USER.findOne({ _id: req.userId });
    console.log(UserDetails);

    if (UserDetails) {
      const cartData = await UserDetails.addtoCart(cart);
      await UserDetails.save();
      console.log(cartData);
      return resp.status(201).json(UserDetails);
    } else {
      return resp.status(401).json({ error: "Invalid User" });
    }
  } catch (error) {
    resp.status(401).json({ error: "Invalid User" });
  }
});

// API To get Cart Detials on BUYNOW page

router.get("/getcartitems", Authentication, async (req, resp) => {
  try {
    const usercart = await USER.findOne({ _id: req.userId });
    resp.status(201).json(usercart);
  } catch (error) {
    console.log(error);
  }
});

// Api To Verify User On Opening of Site and Solved CONTEXT ApI problem call on Homepage
router.get("/getvaliduser", Authentication, async (req, resp) => {
  try {
    const validUser = await USER.findOne({ _id: req.userId });
    resp.status(201).json(validUser);
  } catch (error) {
    console.log(error);
  }
});

// Remove Item From Cart
router.delete("/remove/:id", Authentication, async (req, resp) => {
  try {
    const { id } = req.params;

    req.rootUser.carts = req.rootUser.carts.filter((cartitem) => {
      return cartitem.id !== id;
    });
    req.rootUser.save();
    resp.status(201).json(req.rootUser);
    console.log("Item Removed");
  } catch (error) {
    resp.status(400).json(req.rootUser);
    console.log(error);
  }
});

// LogOut Api
router.get("/logout", Authentication, async (req, resp) => {
  try {
    // Removing Tokens Genereated On Login/Signup
    // it will return only Those Tokens For which user Didnot Logout
    req.rootUser.tokens = req.rootUser.tokens.filter((storedTokens) => {
      return storedTokens.token !== req.token;
    });

    // Clear Cache Data
    resp.clearCookie("Amazonapp", { path: "/" });
    req.rootUser.save();
    resp.status(201).json(req.rootUser.tokens);
    Console.log("User Logout");
  } catch (error) {
    console.log(error);
  }
});

// Stripe Payment Integration
router.post(
  "/api/create-checkout-session",
  Authentication,
  async (req, resp) => {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title.longTitle,
        },
        unit_amount: product.price.cost * 100,
      },
      quantity: 1,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    resp.json({id:session.id})
    
   }
);

module.exports = router;
