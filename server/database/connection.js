const mongoose = require("mongoose");

const connection = async () => {
  try {
    // mongo db connection
    const con = mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connection;
