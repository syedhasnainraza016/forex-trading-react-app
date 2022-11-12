const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/practiceDB")
  .then(() => console.log("Database Connected..."))
  .catch((err) => console.error("Could not connect to database", err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
