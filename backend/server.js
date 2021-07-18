const express = require('express');
const cors = require("cors")    
 const dotenv = require('dotenv');                
const app = express();
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const routes = require('./routes.js');
const config = require('./config')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())


//connecting to database
//  dotenv.config();
// require('./Connect/dbConnect')()

const dbURi ='mongodb+srv://admin:Admin@union.um26t.mongodb.net/Union?retryWrites=true&w=majority'
mongoose.connect(dbURi, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result) => console.log("connected to database"))   // to fire when database is connected
.catch((err)=>console.log(err))

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(new LinkedInStrategy({
  clientID: config.linkedinAuth.clientID,
  clientSecret: config.linkedinAuth.clientSecret,
  callbackURL: config.linkedinAuth.callbackURL,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (token, tokenSecret, profile, done) {
  // console.log(token)
  console.log(profile)
  return done(null, profile);
}
));

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('App listening on port ' + port);
});