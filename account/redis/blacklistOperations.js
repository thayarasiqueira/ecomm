import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { createHash } from 'crypto';
import blacklist from './blacklist.js';

const setAsync = promisify(blacklist.set).bind(blacklist);

const generateTokenHash = (token) => createHash('sha256')
  .update(token)
  .digest('hex');

const addToBlacklist = async (token) => {
  const expDate = jwt.decode(token).exp;
  const tokenHash = generateTokenHash(token);
  await setAsync(tokenHash, '');
  blacklist.expireat(tokenHash, expDate);
};

export default addToBlacklist;
