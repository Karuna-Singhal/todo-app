const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRouter = require("./routes/todoRoutes");

dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());

// for cross communication between server and local host
app.use(cors());

// connected express app with local host
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

// Routes

app.use("/todo", todoRouter);

// start server
const port = process.env.PORT || 3002;
app.listen(port, () => console.log("server started"));
