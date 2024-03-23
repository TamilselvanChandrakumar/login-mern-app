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
    const hash = await bcrypt.hashSync(password, 10);
    res.json({ username, email, hash, checkpassword });
  } catch (error) {
    res.status(500).json({ err: error.message || "Error While Registeration" });
  }
};

// controller for login
exports.login = (req, res) => {
  try {
    if (!req.body) {
      res.status(406).json({ err: "not all fields are entered" });
      return;
    }
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(406).json({ err: "fill all the fields" });
    }

    // compare the hash value

    const user = "$2b$10$USgrGlm/GAezc138MQVQ7OfssStjyr/Bfi.L1HWznfv/eKpvzWKcG";

    const isMatch = bcrypt.compare(password, user);

    res.json({ email, isMatch });
  } catch (error) {
    res.status(500).json({ err: error.message || "error while login" });
  }
};
