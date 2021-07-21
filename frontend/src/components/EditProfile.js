import { useParams } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import React ,{useEffect}from "react";
import "../styles/EditProfile2.css";
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
  
const EditProfile = () => {
    const {userId} = useParams();
    const [userData,setUserData]= useState({});
    console.log(userId);
    const [profess,setprofess]=useState("");  // role
    const [experience,setexperience]=useState("");  //overview
    const [time,settime]=useState("");  //time
    const [linkedin,setlinkedin]=useState(""); //linkedin
    const [github,setgithub]=useState("");   //github
    const [profile,setprofile]=useState("");  //portfolio
    const [skill,setSkill]=useState([]) //skill

    const [details,setDetails]= useState("") // data from linkedin
    const [data,setData] = useState("")


    const [userError, setError] = useState({
      profess: "",
      time: "",
      experience: "",
      linkedin: "",
  })
    

    const handletime=(event)=>{
        settime(event.target.value)
        console.log(event.target.value);
    }

    const handleprofess=(event)=>{
        setprofess(event.target.value)
        console.log(event.target.value);
    }
    const handleexperience=(event)=>{
        setexperience(event.target.value)
        console.log(event.target.value);
    }

    const handleprofile=(event)=>{
        setprofile(event.target.value)
        console.log(event.target.value);
    }
    const handlelinkedin=(event)=>{
        setlinkedin(event.target.value)
        console.log(event.target.value);
    }
    const handlegithub=(event)=>{
        setgithub(event.target.value)
        console.log(event.target.value);
    }
    const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), skill1: '' },
  ]);

const submitHandler = (event)=>{
   console.log("function called")
    event.preventDefault();
    if(experience === "")
    {
        setError((prevErr)=>{
            return {...prevErr, project_name:"Experience can't be empty."}
        })
    }
    // if(Skill == "")
    // {
    //     setError((prevErr)=>{
    //         return {...prevErr, description:"Skill can't be empty."}
    //     })
    // }
    if(profess === "")
    {
        setError((prevErr)=>{
            return {...prevErr, domain:"Profession can't be empty."}
        })
    }
    if(linkedin === "")
    {
      setError((prevErr)=>{
        return {...prevErr, domain:"Linkedin can't be empty."}
    })
    }

    if(time === "")
    {
        setError((prevErr)=>{
            return {...prevErr, domain:"Time can't be empty."}
        })
    }


    if(true)
    {
        const userData = {
            name: details.displayName,
            email: details.emails[0].value,
            photo : details.photos[3].value,
            skill : ['java','python'],
            overview : experience,
            role : profess,
            linkedin: linkedin,
            github : github,
            portfolio : profile,
            login_token : details.id,
            time : time
        }
        
        DataService.setProfile(userData)
        .then(res=>{
          console.log(res.data);
            window.location="http://localhost:3000/procomp";
        }
        )
        .catch(err=>console.log("Error: "+err));
    }
}

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  const retrieveProfile = () => {
    DataService.getProfile()
      .then(response => {
        console.log(response.data);
        setDetails(response.data)
      })
      .catch(e => {
        console.log(e);
      })
  }

  const retrieveData = () => {
    DataService.getData()
      .then(response => {
        console.log(response.data);
        setData(response.data)
        setexperience(data.overview)    //exp
        setprofess(data.role) //role
        settime(data.time) //time
        setlinkedin(data.linkedin) //linkedin
        setgithub(data.github)  //github
        setprofile(data.portfolio) //portfolio
      })
      .catch(e => {
        console.log(e);
      })
  }

    useEffect(()=>{
        retrieveProfile()
        retrieveData()
    },[])

  return (
    <div> 
      { details ? (
      <div>
        <div className='OeditProfile'>
          <div className='OrelativeWrapperTwo'>
            <NavBar middleText="Edit Your Profile"/>
            <div className='Orectangle61' />
        
            <img
              alt=""
              className='Orectangle2'
              src={details.photos[3].value}
            />
          </div>
          <div className='Ogroup188'>
          <TimerIcon />
            <form>
                    <div>
                        <input
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
              <div className='OuserView__basicInfoText__name'>{details.displayName}</div>
                <div style={{display:"flex"}}>
                <WorkIcon />
                <form>
                    <div>
                        <input
                        type="text"
                        value={profess}
                        onChange={handleprofess}
                        placeholder="UX Designer @Google"
                        ></input>
                    </div>
                </form>
                </div>
                <div style={{display:"flex",
                        flexDirection:"row"}}>
                {/* <MailIcon /> */}
                <div style={{fontFamily:"Open Sans",
                             fontWeight:"bold",
                             paddingTop:0}
                    }><p>{details.emails[0].value}</p> </div>
                    </div>
        
              <div style={{display:"flex"}}>
                {/* <WorkIcon /> */}
                <LinkedInIcon />
                <form>
                    <div>
                        <input
                        type="text"
                        value={linkedin}
                        onChange={handlelinkedin}
                        placeholder="Your Linkedin Account"
                        ></input>
                    </div>
                </form>
                </div>
                <div style={{display:"flex"}}>
                <GitHubIcon />
                <form>
                    <div>
                        <input
                        type="text"
                        value={github}
                        onChange={handlegithub}
                        placeholder="Your Github Link"
                        ></input>
                    </div>
                </form>
                </div>
                <div style={{display:"flex"}}>
                <LinkIcon/>
                <form>
                    <div>
                        <input
                        type="text"
                        value={profile}
                        onChange={handleprofile}
                        placeholder="Your Portfolio Link"
                        ></input>
                    </div>
                </form>
                </div>
                </div>
            <div className='OflexWrapperTwenty'>
              <p className='Oexperience'>Experience</p>
              <form>
                    <div>
                        <textarea style={{height:200,
                        width:600,
                        fontSize:20}}
                        type="text"
                        value={experience}
                        onChange={handleexperience}
                        placeholder="Tell us something about your previous experience..."
                        ></textarea>
                    </div>
                </form>
            </div>
          </div>
          <div className='OflexWrapperFour'>
          <Container>
          <p className='Oexperience'>Skills</p>
          <form className={classes.root}>
            { inputFields.map(inputField => (
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
            )) }
          </form>
        </Container>
        </div>
        
          <div className='OflexWrapperThirteen'>
          <Button onClick={submitHandler}
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            //   endIcon={<Icon>send</Icon>}
            //   onClick={handleSubmit}
            >Submit</Button>
            {/* <p className='Osubmit}>Submit</p> */}
          </div>
        </div>
      </div>
      ): (
        <div className="noItem">
        <h1>Loading...</h1>
        </div>
      ) }
    </div>
  );
};

export default EditProfile;
