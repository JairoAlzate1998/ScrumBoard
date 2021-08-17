const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let jwtToken = req.header("Authorization");
  if (!jwtToken) return res.status(400).send("Authorization denied: No token");
};
