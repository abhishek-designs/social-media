const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const helpers = {
  generateToken: (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY);
  },
  verifyToken: (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
  },
  hashPassword: async (password) => {
    const hashedPwd = await bcrypt.hash(password, 10);
    return hashedPwd;
  },
  verifyPassword: async (password, encryptedPwd) => {
    const isValid = await bcrypt.compare(password, encryptedPwd);
    return isValid;
  },
};

module.exports = helpers;
