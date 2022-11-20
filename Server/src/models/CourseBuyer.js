const mongoose = require("mongoose");

const CourseBuyerSchema = new mongoose.Schema(
  {
    title: String,
    price: String,
    duration: String,
    code: String,
    buyer_id: String,
  },
  { timestamps: true }
);

const Buyers = mongoose.model("Buyers", CourseBuyerSchema);

module.exports = Buyers;
