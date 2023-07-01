const helpers = require("../helpers");
const { verifyToken } = helpers;

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({
        msg: "Auth token not found",
      });
    }

    // Verify token
    const user = verifyToken(token.split(" ")[1]);

    if (!user) {
      return res.status(400).json({
        msg: "Token is invalid",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};

module.exports = authenticate;
