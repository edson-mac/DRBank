const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

module.exports = (data = {}) => jwt.sign({ data }, secret, jwtConfig);