const router = require("express").Router();

const auth = require("../middleware/auth.js");

const controller = require("../controller/controller.js");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.delete("/delete", auth, controller.delete);

module.exports = router;
