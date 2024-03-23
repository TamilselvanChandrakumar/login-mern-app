const express = require("express");
const app = express();
require("dotenv").config();

const router = require("./router/router.js");

const PORT = process.env.PORT || 8000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server listenting on port", PORT);
});
