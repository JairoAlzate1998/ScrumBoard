const Role = require("../models/role");

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(401).send("process failed: Incomplete data");

  const existingRole = await Role.findOne({ name: req.body.name });
  if (existingRole)
    return res.status(401).send("Process failed: Role already exist");

  const role = new Role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await role.save();
  if (!result) return res.status(401).send("Failed to register role");
  return res.status(200).send({ role });
};

const listRole = async (req, res) => {
  const role = await Role.find();
  if (!role || role.length === 0) return res.status(401).send("No role");
  return res.status(200).send({ role });
};

const updateRole = async (req, res) => {
  if (!req.body._id || !req.body.name || !req.body.description)
    return res.status(400).send("Process failed: Incomplete data");

  let role = await Role.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    email: req.body.email,
    description: req.body.description
  });

  if (!role) res.status(400).send("Process failed: Error editing role");
  return res.status(200).send({ role });
}

module.exports = { registerRole, listRole, updateRole };
