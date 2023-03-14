const passport = require('passport');
const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer').Strategy;
const isTokenBlacklisted = require('../../redis/blacklistOperations.js');

const checkIfBlacklisted = async (token) => {
  const result = await isTokenBlacklisted(token);
  if (result) {
    throw new jwt.JsonWebTokenError('Invalid token by logout');
  }
};

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await checkIfBlacklisted(token);
        const payload = jwt.verify(token, process.env.JWT_SECRET || 'bLW+Z5lsCdJ1shH7M4sKB9Gu3Xo7/tw1XvSYCPoaTojdQJd4txw2QEPIcS3g0PtfPZlW5noAN/Te7YHR+G3F0pWYr8G1KGSsSmPgcyBNC4Oilnawow+6YMyjTKssmW3wm8okgldJ/qlLnFJSU0vbEAxyIk3ssrOFCOFoTa3H51rrMwE1n88rBZyI0pn+ePZGwc7GshUBdRo5t72Lbk5YbS+TO5YYefgtuGBa6xdwamzANn4PyWuBtO0Avnr6kr3kigaVGX6KglzB+BPqtKwdg9k4Ohht/fAxoZEj3n8y5Mf4wcgEWj7HrLpMlTAYx/MpYW81Q8OpMfJdrpH2+9lb/Q==');
        done(null, payload.id, { token });
      } catch (erro) {
        done(erro);
      }
    },
  ),
);

module.exports = BearerStrategy;
