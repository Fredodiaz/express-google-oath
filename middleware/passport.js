const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Load DB Config + Env Variables
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env'})

passport.serializeUser(function(user, done) {
    done(null, user);
  });

// SERIALIZER ISN'T BEING CALLED BUG
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACKURL,
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));