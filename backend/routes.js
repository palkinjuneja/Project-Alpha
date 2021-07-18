
const passport = require('passport');
const express = require('express');
var router = express.Router();
const User = require('./models/user')

router.get('/', function (req, res) {
  res.send('<h3>Sample Page</h3>')
});


router.get('/profile', isLoggedIn, async function (req, res) {   //ask the team
  details = req.user    // details returned by lindekin api
  id = details.id      // linkedin id
  let userinfo = ""

  await router.get('/details', (req, res) => {
    res.json(details)

  })

    //  the check for whether the token already exists here.....
  // match with details.id
  
  await User.findOne({
    login_token:id
  })
  .then(response=>{
    if(!response){
      res.redirect("http://localhost:3000/profile") 
    }
    // userinfo=response
    router.get('/data',(req,res)=>{
      res.json(response)
    })
    res.redirect("http://localhost:3000/procomp")

  })
  .catch(err=>{
    console.log("could not get data from the database")
  })
  



  // userinfo ? (
  //   res.redirect("http://localhost:3000/procomp")
  // ):(
  //   res.redirect("http://localhost:3000/profile") 
  // )

    // is this safe to redirect this way??
});

router.post("/profile",(req,res)=>{
  const user = new User(req.body)
  user.save()

  .then((result)=>{
      router.redirect('http://localhost:3000/procomp')
  })
  .catch((err)=>{
      console.log(err)
  })
})


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