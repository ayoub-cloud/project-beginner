console.clear();
// import express
const express = require("express");
const connectDB = require("./config/connectDB");
// instance app
var cors = require('cors');
const app = express();
require("dotenv").config();

connectDB();

app.use(cors());

// router
// user
app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/post", require("./router/postRoutes"));

// PORT
const PORT = process.env.PORT;

// create serverz
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);

