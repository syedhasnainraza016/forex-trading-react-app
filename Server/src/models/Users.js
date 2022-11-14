const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    role: String,
  },
  { timestamps: true }
);

const user = mongoose.model("User", UserSchema);

module.exports = user;
