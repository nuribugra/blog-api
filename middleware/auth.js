const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function (req, res, next) {
  // Get token from header
  let token = req.header('Authorization');

  // Check if no token
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Remove 'Bearer ' from the token string
  token = token.slice(7, token.length).trimLeft();

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
