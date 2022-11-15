const User = require("./src/models/Users.js");
const admins = require("./admin.js");
const connectDB = require("./src/DB/Connection.js");

const importData = async () => {
  try {
    let adminArray = await admins();
    const createdAdmins = await User.insertMany(adminArray);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error("error db");
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
