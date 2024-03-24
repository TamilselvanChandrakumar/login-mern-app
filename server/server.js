const express = require("express");
const app = express();
require("dotenv").config();
const connect = require("./database/connection.js");
const router = require("./router/router.js");

app.use(express.json());

const PORT = process.env.PORT || 8000;

// mongodb connection

connect();

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server listenting on port", PORT);
});
