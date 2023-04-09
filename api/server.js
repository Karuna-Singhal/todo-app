const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// config for env
require("dotenv").config({ path: "./config.env" });

// json parsers
app.use(express.json());

// cors config
app.use(cors());

// db connection config
require("./config/mongoose");

// Routes
app.use("/todo", require("./routes/todoRoutes"));

// start server

app.listen(process.env.PORT || 5000, () =>
  console.log("server started at port: " + `${process.env.port}`)
);
