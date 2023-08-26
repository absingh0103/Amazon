require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connection = require("./db/connection");
const Products = require("./models/productsSchema");
const router = require("./Routes/router");
const cors = require("cors");
const app = express();

const DefaultData = require("./defaultData");
const cookieParser = require("cookie-parser");
const path = require("path");

// to Parse Json data
app.use(express.json());
app.use(cors());
app.use(router);
app.use(cookieParser(""));
// For Deployment

app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*",(req,resp)=>{
  resp.sendFile(path.join(__dirname,"./client/build/index.html"),(err)=>{
    resp.status(500).send(err);
  })
})
const port = process.env.PORT || 8005;



app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});

// DefaultData();
