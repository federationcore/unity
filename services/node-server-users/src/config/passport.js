const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user.model');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
module.exports = (passport) => {
  passport.use(
    //reveal the token and find user by id
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id).then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false).catch((err) => console.log(err));
      });
    })
  );
};
