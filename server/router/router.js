const router = require("express").Router();
const controller = require("../controller/controller.js");
router.post("/register", controller.register);
router.post("/login", controller.login);
module.exports = router;
