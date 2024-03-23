const express = require("express");
const app = express();
require("dotenv").config();

const router = require("./router/router.js");

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server listenting on port", PORT);
});
