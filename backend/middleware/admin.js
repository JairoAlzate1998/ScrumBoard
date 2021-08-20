const Role = require("../models/role");

const admin = async (req, res, next) => {
  let role = await Role.findById(req.user.roleId);
  if (!role)
    return res.status(400).send("Process failed: The role doesn´t exist in db");

  if (role.name === "admin") next();
  else return res.status(400).send("Process failed: Unthorized user");
};

module.exports = admin;
