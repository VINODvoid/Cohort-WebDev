const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  const token = req.header.token;
  const decoded = jwt.verify(token, `${process.env.JWT_USER_PASSWORD}`);
}

module.exports = {};
