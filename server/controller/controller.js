const User = require("../models/loginSchema.js");
const jwt = require("jsonwebtoken");
// controller for register
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "You have to fill the registeration form" });
      return;
    }
    const { username, email, password, checkpassword } = req.body;
    if (!username || !email || !password || !checkpassword) {
      res.status(406).json({ err: "Not all fields have been enterd" });
    }
    if (password.length <= 8 && checkpassword.length <= 8) {
      res
        .status(406)
        .json({ err: "The password need to be atleast 8 character" });
    }
    if (password !== checkpassword) {
      res.status(406).json({ err: "password must be same for verification" });
    }
    // hash the password
    const hash = await bcrypt.hashSync(password, 10);
    //  using document structure

    const newUser = new User({
      username,
      email,
      password: hash,
    });

    newUser
      .save(newUser)
      .then((register) => {
        console.log(register);
        res.json(register);
      })
      .catch((err) => {
        res.status(406).json({ error: err.message || "something went wrong" });
      });

    // res.json({ username, email, hash, checkpassword });
  } catch (error) {
    res.status(500).json({ err: error.message || "Error While Registeration" });
  }
};

// controller for login
exports.login = async (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "not all fields are entered" });
      return;
    }
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(406).json({ err: "fill all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(406).json({ err: "No account with this email" });
    }

    // compare the hash value

    // const user = "$2b$10$USgrGlm/GAezc138MQVQ7OfssStjyr/Bfi.L1HWznfv/eKpvzWKcG";

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(406).json({ err: "Invalid credential" });
    }

    // create jwt token

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    res.json({ token, username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ err: error.message || "error while login" });
  }
};

// delete user controller.

exports.delete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user_id);
    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ err: error.message || "Error while deleting the user" });
  }
};
