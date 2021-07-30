import { useParams } from 'react-router-dom';
import { useState } from 'react';
import React, { useEffect } from "react";
import "../styles/newProfile.css";
import TimerIcon from '@material-ui/icons/Timer';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import NavHeader from './navHeader';
import FooterModule from './footer'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

const NewProfile = () => {
  
  
  const [profess, setprofess] = useState("");  // role
  const [experience, setexperience] = useState("");  //overview
  const [time, settime] = useState("");  //time
  const [linkedin, setlinkedin] = useState(""); //linkedin
  const [github, setgithub] = useState("");   //github
  const [profile, setprofile] = useState("");  //portfolio
  const [skills, setSkill] = useState([]) //skill
 



  const data = JSON.parse(localStorage.getItem('userDetails'))
 
  const onEditHandler=()=>{
    window.location="/edit";
}


  const handletime = (event) => {
    settime(event.target.value)
    console.log(event.target.value);
  }

  const handleprofess = (event) => {
    setprofess(event.target.value)
    console.log(event.target.value);
  }
 
  const classes = useStyles()
 



  const retrieveData = () => {
   
    // console.log(response.data);
    // setData(response.data)
    if (typeof(data.skill)=='string'){
      var skill2 = [];
      skill2.push(data.skill);
      setSkill(skill2)
    }else{setSkill(data.skill)}
    
    setexperience(data.overview)    //exp
    setprofess(data.role) //role
    settime(data.time) //time
    setlinkedin(data.linkedin) //linkedin
    setgithub(data.github)  //github
    setprofile(data.portfolio) //portfolio
  }

  useEffect(() => {
    retrieveData()
  }, [])

  return (
    <div>
      <NavHeader middleText="My Profile"/>
      {data ? (
        <div>
          <div className='OeditProfile'>
            <div className='OrelativeWrapperTwo'>
              <div className="col offset-10">
                <button className="editProfileButton" onClick={onEditHandler}>
                  Edit Profile
                </button>
              </div>

              <div className="container">
                <div className="container">
                  <div className="col">
                    <figure className="figure">
                      <img src={data.photo} style={{ height: "50%", width: "50%" }} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
                    </figure>
                  </div>
                  <div className="col" style={{ marginBottom: "5%" }}>
                    <h1>
                      {data.name}
                    </h1>
                  </div>
                </div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <MailIcon />
                      <label for="inputEmail4">Email</label>
                      <div className="p-3 border bg-light"><b>{data.email}</b></div>
                    </div>
                    <div className="form-group col-md-6">
                      <WorkIcon />
                      <label for="inputPassword4">Role</label>
                      <div className="p-3 border bg-light"><b>{data.role}</b></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col justify-content-center">
                      <label for="exampleFormControlTextarea1">Experience</label>
                      <textarea style={{ fontWeight: "bold" }} class="form-control rounded-0" value={data.overview}
                        id="exampleFormControlTextarea1" rows="10" readOnly="readonly">
                      </textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <LinkedInIcon />
                    <label for="inputAddress2">LinkedIn</label>
                    <div className="p-3 border bg-light"><b>{data.linkedin}</b></div>
                  </div>
                  <div className="form-group">
                    <GitHubIcon />
                    <label for="inputAddress2">Github</label>
                    <div className="p-3 border bg-light"><b>{data.github}</b></div>
                  </div>
                  <div className="form-group">
                    <LinkIcon />
                    <label for="inputAddress2">Portfolio</label>
                    <div className="p-3 border bg-light"><b>{data.portfolio}</b></div>
                  </div>
                  <div className="form-group col justify-content-center">
                    <TimerIcon />
                    <label for="inputAddress2">Availability</label>
                    <div className="p-3 border bg-light"><b>{data.time} Hours per week</b></div>
                  </div>
                </form>

                <Container>
                  <p>Current Skills</p>
                  <div>
                    <ul>
                      {skills.map((skill) => {
                        return (
                          <div style={{ display: "inline-block" }} className="col-lg-4 pb-1">
                            <div className="card" style={{ backgroundColor: "antiquewhite" }}>
                              <div className="card-body">
                                <h5 className="card-title">{skill}</h5>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </ul>
                  </div>
                </Container>
              </div>
            </div>

            <div className='OflexWrapperThirteen'>
            </div>
          </div>
          <FooterModule />
        </div>
      ) : (
        <div className="noItem">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default NewProfile;
