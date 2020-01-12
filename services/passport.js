const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const mongoose = require('mongoose');
const clientKeys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userID, done) => {
  User.findById(userID).then(foundUser => {
    done(null, foundUser);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: clientKeys.googleClientID,
      clientSecret: clientKeys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
      proxy: true,
    },
    async (accessToken, refreshToken, { id: googleID, displayName }, done) => {
      const existingUser = await User.findOne({ googleID });

      if (existingUser) done(null, existingUser);
      const newUser = await new User({ googleID, displayName }).save();
      done(null, newUser);
    }
  )
);
