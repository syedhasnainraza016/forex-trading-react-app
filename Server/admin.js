const bcrypt = require("bcrypt");

let adminUser = async () => {
  let pass;
  pass = await bcrypt.hash("12345678", 10);

  const admins = [
    {
      username: "admin",
      email: "admin@gmail.com",
      password: pass,
      role: "admin",
    },
  ];
  return admins;
};
module.exports = adminUser;
