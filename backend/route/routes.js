import passport from 'passport';
import express from 'express';
import querystring from 'querystring';
import User from '../models/user.js'
import {userGetter,userGetterBySkill,userGetterByRole,userGetterById,collaborationUpdateById,collaborationRequestGetter,getUserIdByToken} from '../controller/userController.js'

var router = express.Router();

router.get('/', function (req, res) {
  res.send('<h3>Sample Page</h3>')
});


router.get('/allUsers',userGetter);
router.get('/userBySkill',userGetterBySkill);
router.get('/userByRole',userGetterByRole);
router.get('/userById',userGetterById);
router.get('/getCollabRequest',collaborationRequestGetter);
router.put('/requestAction',collaborationUpdateById);
router.get('/getUserId',getUserIdByToken)


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
      
      const obj = querystring.stringify({
        "login_token":id,
        "name":details.displayName,
        "photo":details.photos[3].value,
        "email": details.emails[0].value,
        "skill":[],
        "overview":"",
        "linkedin":"",
        "github":"",
        "portfolio":"",
        "role":"",
        "time":"",
        "userId":""
      });
   
      res.redirect(process.env.FRONTEND_REDIRECT+'/oldUser/?'+obj)
      // res.redirect("http://localhost:3000/edit") 
    }else {

      
    const query = querystring.stringify({
      "login_token":response.login_token,
      "name":response.name,
      "skill":response.skill,
      "overview":response.overview,
      "linkedin":response.linkedin,
      "github":response.github,
      "portfolio":response.portfolio,
      "role":response.role,
      "time":response.time,
      "photo":response.photo,
      "email":response.email,
    });
    console.log(query)
    console.log("Id is "+response._id)
    console.log(response)
    res.redirect(process.env.FRONTEND_REDIRECT+'/oldUser/?'+query+"&id="+response._id)
  }
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
       console.log(response)
        
        res.json({status:"success"})
      })
    }
    else
    {
      const user = new User(req.body)
      user.save()
      .then((result)=>{
         router.get('/data',(req,res)=>{
          res.json(result)
          console.log(result)
        })
          res.json({status:"success"})
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  })

})


router.get('/auth/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile'],
}));

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: process.env.FRONTEND_REDIRECT+'/'
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