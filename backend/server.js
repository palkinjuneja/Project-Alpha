import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
import passport from 'passport';
import LinkedIn from 'passport-linkedin-oauth2'
import routes from './route/routes.js'
import config from './config.js'
import mongoose from 'mongoose' 
// const projectRouter = require('./routers/projectRouter');
// const userRouter = require('./routers/userRouter');
// const requestRouter = require('./routers/requestRouter');
import projectRouter from './route/projectRouter.js';
import requestRouter from './route/requestRouter.js'

dotenv.config();  
            
const app = express();
app.use(cors())
app.use(express.json())




const dbURi = process.env.MONGODB_URL;

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

passport.use(new LinkedIn.Strategy({
  clientID: config.linkedinAuth.clientID,
  clientSecret: config.linkedinAuth.clientSecret,
  callbackURL: config.linkedinAuth.callbackURL,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (token, tokenSecret, profile, done) {

  return done(null, profile);
}
));

//Project Router
app.use('/project', projectRouter);

//Request Router
app.use('/request', requestRouter);

app.use('/', routes);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
