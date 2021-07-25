import { useParams } from 'react-router-dom';
import { useState } from 'react';
import React, { useEffect, useContext } from "react";
import "../styles/newProfile.css";
import NavBar from "./NavBar";
import TimerIcon from '@material-ui/icons/Timer';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import DataService from "../services/backendRoutes"
import { UserContext } from '../userContext';
import FooterModule from './footer';

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
  const { user, setUser } = useContext(UserContext)
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [profess, setprofess] = useState("");  // role
  const [experience, setexperience] = useState("");  //overview
  const [time, settime] = useState("");  //time
  const [linkedin, setlinkedin] = useState(""); //linkedin
  const [github, setgithub] = useState("");   //github
  const [profile, setprofile] = useState("");  //portfolio
  const [skill, setSkill] = useState("") //skill
  const [error, setError] = useState(false)

  const [details, setDetails] = useState("") // data from linkedin

  const data = JSON.parse(localStorage.getItem('userDetails'))
 
  const onEditHandler=()=>{
    window.location="http://localhost:3000/edit";
}


  const handletime = (event) => {
    settime(event.target.value)
    console.log(event.target.value);
  }

  const handleprofess = (event) => {
    setprofess(event.target.value)
    console.log(event.target.value);
  }
  const handleexperience = (event) => {
    setexperience(event.target.value)
    console.log(event.target.value);
  }

  const handleprofile = (event) => {
    setprofile(event.target.value)
    console.log(event.target.value);
  }
  const handlelinkedin = (event) => {
    setlinkedin(event.target.value)
    console.log(event.target.value);
  }
  const handlegithub = (event) => {
    setgithub(event.target.value)
    console.log(event.target.value);
  }
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), skill1: '' },
  ]);


  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
  }

  const handleRemoveFields = id => {
    const values = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }



  const retrieveData = () => {

    // console.log(response.data);
    // setData(response.data)
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
      {data ? (
        <div>
          <div className='OeditProfile'>
            <div className='OrelativeWrapperTwo'>
              <NavBar middleText="My Profile" />
              <button className="editProfileButton" onClick={onEditHandler}>
                   Edit Profile
               </button>
              <div className='Orectangle61' />

              <img
                alt=""
                className='Orectangle2'
                src={data.photo}
              />
            </div>
            <div className='Ogroup188'>
              <form>
                <div className='Otimer'>
                <TimerIcon />
                  <label for="time">Availability <br /> </label>
                  <input id="time"
                    type="text"
                    value={time}
                    onChange={handletime}
                    placeholder="3 Hrs per week"
                    label="Required"
                  ></input>
                </div>
              </form>
            </div>
            <div className='OflexWrapperFourteen'>
              <div className='OflexWrapperTwenty'>
                <div className='OuserView__basicInfoText__name'>{data.name}</div>
                <div >
                  <WorkIcon />
                  <form>
                    <div>
                      <label for="role">Current Role <br /></label>
                      <input
                        id="role"
                        type="text"
                        value={profess}
                        onChange={handleprofess}
                        placeholder="UX Designer @Google"
                        readOnly="readonly"
                      ></input>
                    </div>
                  </form>
                </div>
                <div style={{
                  flexDirection: "row", marginTop: "27px"
                }}>
                  <MailIcon />
                  <form>
                    <div>
                        <label for="gmail">Gmail <br/></label>
                        <input
                        id="gmail"
                        type="text"
                        value={data.email}
                        ></input>
                    </div>
                </form>
                </div>

                <div style={{ marginTop: "26px" }}>
                  {/* <WorkIcon /> */}
                  <LinkedInIcon />
                  <form>
                    <div>
                      <label for="linkedin">Linkedin* <br /></label>
                      <input
                        id="linkedin"
                        type="text"
                        value={linkedin}
                        // onChange={handlelinkedin}
                        // placeholder="Your Linkedin Account"
                        readOnly="readonly"
                      ></input>
                    </div>
                  </form>
                </div>
                <div style={{ marginTop: "26px" }}>
                  <GitHubIcon />
                  <form>
                    <div>
                      <label for="github">Github <br /></label>
                      <input
                        id="github"
                        type="text"
                        value={github}
                        // onChange={handlegithub}
                        // placeholder="Your Github Link"
                        readOnly="readonly"
                      ></input>
                    </div>
                  </form>
                </div>
                <div style={{ marginTop: "26px" }}>
                  <LinkIcon />
                  <form>
                    <div>
                      <label for="portfolio">Portfolio <br /></label>
                      <input
                        id="portfolio"
                        type="text"
                        value={profile}
                        // onChange={handleprofile}
                        // placeholder="Your Portfolio Link"
                        readOnly="readonly"
                      ></input>
                    </div>
                  </form>
                </div>
              </div>
              <div className='OflexWrapperTwentyOne'>
                <p className='Oexperience'>Experience</p>
                <form>
                  <div>
                    <textarea readOnly="readonly" style={{
                      height: 393,
                      width: 717,
                      fontSize: 20,
                      backgroundColor:'antiquewhite'
                    }}
                      type="text"
                      value={experience}
                      // onChange={handleexperience}
                      // placeholder="Tell us something about your previous experience..."
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className='OflexWrapperFour'>
              <Container>
                <p className='Oexperience'>Skills</p>
                <form className={classes.root}>
                  {inputFields.map(inputField => (
                    <div key={inputField.id}>
                      <TextField
                        name="firstName"
                        label="Skill"
                        variant="filled"
                        value={inputField.firstName}
                        onChange={event => handleChangeInput(inputField.id, event)}
                      />
                      {/* <TextField
                  name="lastName"
                  label="Skill"
                  variant="filled"
                  value={inputField.lastName}
                  onChange={event => handleChangeInput(inputField.id, event)}
                /> */}
                      <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                        <RemoveIcon />
                      </IconButton>
                      <IconButton
                        onClick={handleAddFields}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  ))}
                </form>
              </Container>
            </div>

            <div className='OflexWrapperThirteen'>
              {/* <Button onClick={submitHandler}
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              style={{width:"213px",height:"46px"}}
            >Submit</Button> */}
              {/* <p className='Osubmit}>Submit</p> */}
            </div>
          </div>
          <FooterModule/>
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
