import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Account from '../models/Account.js';
import { decrypt } from '../utils/hash.js';
import createCustomError from './customError.js';

const verifyPassword = (password, hash) => {
  if (!decrypt(password, hash)) {
    return false;
  }
  return true;
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

export default LocalStrategy;
