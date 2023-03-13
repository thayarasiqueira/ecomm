import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import Account from '../models/Account.js';
import { decrypt } from '../utils/hash.js';
import createCustomError from './customError.js';
import { isTokenBlacklisted } from '../../redis/blacklistOperations.js';

const verifyPassword = (password, hash) => {
  if (!decrypt(password, hash)) {
    return false;
  }
  return true;
};

const checkIfBlacklisted = async (token) => {
  const result = await isTokenBlacklisted(token);
  if (result) {
    throw new jwt.JsonWebTokenError('Invalid token by logout');
  }
};

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    session: false,
  }, (email, senha, done) => {
    Account.findOne({ email }, (err, account) => {
      if (err) {
        return done(err);
      }
      if (!account) {
        return done(createCustomError(400, 'Invalid email or password'));
      }
      if (!verifyPassword(senha, account.senha)) {
        return done(createCustomError(400, 'Invalid email or password'));
      }
      done(null, account);
      return true;
    });
  }),
);

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await checkIfBlacklisted(token);
        const payload = jwt.verify(token, process.env.JWT_SECRET || 'bLW+Z5lsCdJ1shH7M4sKB9Gu3Xo7/tw1XvSYCPoaTojdQJd4txw2QEPIcS3g0PtfPZlW5noAN/Te7YHR+G3F0pWYr8G1KGSsSmPgcyBNC4Oilnawow+6YMyjTKssmW3wm8okgldJ/qlLnFJSU0vbEAxyIk3ssrOFCOFoTa3H51rrMwE1n88rBZyI0pn+ePZGwc7GshUBdRo5t72Lbk5YbS+TO5YYefgtuGBa6xdwamzANn4PyWuBtO0Avnr6kr3kigaVGX6KglzB+BPqtKwdg9k4Ohht/fAxoZEj3n8y5Mf4wcgEWj7HrLpMlTAYx/MpYW81Q8OpMfJdrpH2+9lb/Q==');
        const account = await Account.findById(payload.id);
        done(null, account, { token });
      } catch (erro) {
        done(erro);
      }
    },
  ),
);

export { LocalStrategy, BearerStrategy };
