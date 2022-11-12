const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: String,
    password: String,
    email: String,
    role: String,
  },
  { timestamps: true }
);

const user = mongoose.model("User", UserSchema);

module.exports = user;
