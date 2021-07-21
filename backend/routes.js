
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

  await router.get('/details', (req, res) => {
    res.json(details)

  })

  
  await User.findOne({
    login_token:id
  })
  .then(response=>{
    if(!response){
      res.redirect("http://localhost:3000/edit") 
    }
    // userinfo=response
    router.get('/data',(req,res)=>{
      res.json(response)
    })
    res.redirect("http://localhost:3000/procomp")  //might have to change to router.redirect
  })
  .catch(err=>{
    console.log("could not get data from the database")
  })
  

});

router.post("/profile",(req,res)=>{
 
  data=req.body
  id = data.login_token

  User.count({login_token:id}, (err,count)=>{
    if(count>0){ 
      var query = {login_token:id};  /// add time and photo
      var newValues =  { $set:{ skill: data.skill, overview: data.overview, linkedin: data.linkedin, github: data.github , portfolio: data.portfolio, role: data.role, time: data.time, photo:data.photo }};
      User.updateOne(query,newValues,(err,response)=>{
        if(err){
          console.log(err)
          throw err
        }
        console.log("document updated")
        res.json({status:"success"})
      })
    }
    else
    {
      const user = new User(req.body)
      user.save()
      .then((result)=>{
          res.json({status:"success"})
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  })

  // const user = new User(req.body)
  // user.save()
  // .then((result)=>{
  //     router.redirect('http://localhost:3000/procomp')
  // })
  // .catch((err)=>{
  //     console.log(err)
  // })
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