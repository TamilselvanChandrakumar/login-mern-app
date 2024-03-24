const jwt = require("jsonwebtoken");

// create a middleware

const auth = (req, res, next) => {
  const token = req.header("x-access-token");
  if (!token) {
    return res
      .status(406)
      .json({ err: "No authentication token,authorisation denied" });
  }

  const verified = jwt.verify(token, process.env.SECRET_KEY);
  if (!verified) {
    return res
      .status(406)
      .json({ err: "Token verification failed,authorisation denied" });
  }
  req.user_id = verified.id;
  next();
};
module.exports = auth;
