import passport from 'passport';
import express from 'express';
import querystring from 'querystring';

var router = express.Router();

import User from './models/user.js'

// const User = require('./models/user')

router.get('/', function (req, res) {
  res.send('<h3>Sample Page</h3>')
});


router.get('/profile', isLoggedIn, async function (req, res) {   //ask the team
  let details = req.user    // details returned by lindekin api
  let id = details.id      // linkedin id

  await router.get('/details', (req, res) => {
    res.json(details)

  })

  
  await User.findOne({
    login_token:id
  })
  .then(response=>{
    if(!response){
      
      // const query = querystring.stringfy({
      //   "login_token": details.id,
      //   "name":details.displayName,
      //   "photo": details.photo[3].value,
      //   "email":details.email
      // });
      // res.redirect(
      //   'http://localhost:3000/newUser/?'+query
      // )
      res.redirect("http://localhost:3000/edit") 
    }

    router.get('/data',(req,res)=>{
      res.json(response)
    })

    const query = querystring.stringify({
      "login_token": response.login_token,
      "name":response.email,
      "skill":response.skill,
      "overview":response.overview,
      "linkedin":response.linkedin,
      "github":response.github,
      "portfolio":response.portfolio,
      "role":response.role,
      "time":response.time,
      "photo":response.photo,
      "email":response.email
    });
    console.log("hello")
    console.log(query)
    res.redirect('http://localhost:3000/oldUser/?'+query)
    // res.redirect("http://localhost:3000/procomp")  //might have to change to router.redirect
  })
  .catch(err=>{
    console.log(err)
  })
  

});

router.post("/profile",(req,res)=>{
  let info = req
  let data=req.body
  let id = data.login_token

  User.count({login_token:id}, (err,count)=>{
    if(count>0){ 
      var query = {login_token:id};  
      var newValues =  { $set:{ skill: data.skill, overview: data.overview, linkedin: data.linkedin, github: data.github , portfolio: data.portfolio, role: data.role, time: data.time, photo:data.photo }};
      User.updateOne(query,newValues,(err,response)=>{
        if(err){
          console.log(err)
          throw err
        }
        console.log("document updated")
        // console.log(data)
        router.get('/data',(req,res)=>{
          console.log(data)
          res.json(data)
        })
        res.json({status:"success"})
      })
    }
    else
    {
      const user = new User(req.body)
      user.save()
      .then((result)=>{
         router.get('/data',(req,res)=>{
          res.json(data)
        })
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

export default router