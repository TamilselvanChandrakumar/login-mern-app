const router = require("express").Router();
const controller = require("../controller/controller.js");
router.get("/login", controller.login);
router.post("/register", controller.register);
module.exports = router;
