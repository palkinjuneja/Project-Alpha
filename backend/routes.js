
const passport = require('passport');
const express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('<h3>Sample Page</h3>')
});

router.get('/api', (req, res) => {
  res.json(data)
})

router.get('/profile', isLoggedIn, async function (req, res) {   //ask the team
  details = req.user
  await router.get('/details', (req, res) => {
    res.json(details)
  })

  // do the check for whether the token already exists here.....
  // match with details.id



  // if so
  // router.get('/userdata',(req,res)=>{
  //   res.json("the object got from the database")
  // })

  res.redirect("http://localhost:3000/profile")   // is this safe to redirect this way??
});

router.get('/auth/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile'],
}));

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: 'http://localhost:3000/first'
  }));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router;