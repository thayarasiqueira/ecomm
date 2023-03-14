const { promisify } = require('util');
const { createHash } = require('crypto');
const blacklist = require('./blacklist.js');

const existsAsync = promisify(blacklist.exists).bind(blacklist);

const generateTokenHash = (token) => createHash('sha256')
  .update(token)
  .digest('hex');

const isTokenBlacklisted = async (token) => {
  const tokenHash = generateTokenHash(token);
  const result = await existsAsync(tokenHash);
  return result === 1;
};

module.exports = { isTokenBlacklisted };
