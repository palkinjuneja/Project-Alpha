import { useParams } from 'react-router-dom';
import {useState} from 'react';
import React ,{useEffect,useContext}from "react";
import "../styles/EditProfile2.css";

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
import axios from 'axios';
import NavHeader from './navHeader';

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
    const [profess,setprofess]=useState("");  // role
    const [experience,setexperience]=useState("");  //overview
    const [time,settime]=useState("");  //time
    const [linkedin,setlinkedin]=useState(""); //linkedin
    const [github,setgithub]=useState("");   //github
    const [profile,setprofile]=useState("");  //portfolio
   

    const data=JSON.parse(localStorage.getItem('userDetails'))
    const [inputFields, setInputFields] = useState("");
    
   

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

    const handleChangeInput = (event) => {
      setInputFields(event.target.value);
      console.log(inputFields)
    }
    const classes = useStyles()

  

  const submitHandler = (event) => {
    event.preventDefault();
    
    let skills =[];
    skills = inputFields.toString().toLowerCase().split(",")
    


    if (experience && time && profess && linkedin && skills[0]!='')  //add skill
    {
      const userData = {
        name: data.name,
        email: data.email,
        photo: data.photo,
        skill: skills,
        overview: experience,
        role: profess.toLowerCase(),
        linkedin: linkedin,
        github: github,
        portfolio: profile,
        login_token: data.login_token,
        time: time,
        userId:data.userId
      }

      DataService.setProfile(userData)
        .then(res => {
          console.log(res.data);
          localStorage.setItem('userDetails', JSON.stringify(userData))
           window.location.href = "/profile";
        }
        )
        .catch(err => console.log("Error: " + err));
    } else {
      alert("Please fill in all the required fields !")
    }
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
        setInputFields(data.skill)
  }

    useEffect(()=>{
        retrieveData()
    },[])

  return (
    <div> 
      {/* <NavHeader middleText="Edit Your Profile"/> */}
      {data ? (
                <div>
                    <div className='OeditProfile'>
                        <div className='OrelativeWrapperTwo'>
                           

                        </div>

                        <div className="container">
                            <div className="container">
                                <div className="col">
                                    <figure className="figure">
                                        <img src={data.photo} style={{ height: "50%", width: "50%" }} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
                                    </figure>
                                </div>
                                <div className="col" style={{ marginBottom: "5%" }}>
                                    <h2>
                                        Welcome {data.name}, lets get you started in no time !
                                    </h2>
                                </div>
                            </div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <MailIcon />
                                        <label for="inputEmail4">Email</label>
                                        <input type="text" className="form-control"
                                            value={data.email} readOnly="readonly"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <WorkIcon />
                                        <label for="inputPassword4">Role*</label>
                                        <input type="text" className="form-control"
                                            value={profess}
                                            onChange={handleprofess}
                                            placeholder="eg: UX Designer"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col justify-content-center">
                                        <label for="exampleFormControlTextarea1">Experience*</label>
                                        <textarea class="form-control rounded-0" value={experience}
                                            onChange={handleexperience} id="exampleFormControlTextarea1" rows="10">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <LinkedInIcon />
                                    <label for="inputAddress2">LinkedIn*</label>
                                    <input type="text" className="form-control" onChange={handlelinkedin} value={linkedin} placeholder="Linkedin profile link" />
                                </div>
                                <div className="form-group">
                                    <GitHubIcon />
                                    <label for="inputAddress2">Github</label>
                                    <input type="text" className="form-control" onChange={handlegithub} value={github} placeholder="Github profile link" />
                                </div>
                                <div className="form-group">
                                    <LinkIcon />
                                    <label for="inputAddress2">Portfolio</label>
                                    <input type="text" className="form-control" onChange={handleprofile} value={profile} placeholder="Portfolio link" />
                                </div>
                                <div className="form-group col justify-content-center">
                                    <TimerIcon />
                                    <label for="inputAddress2">Availability*</label>
                                    <input type="text" className="form-control" onChange={handletime} value={time} placeholder="Time in hours/week" />
                                </div>

                            </form>
                        

                        <Container>
                            <form className={classes.root}>
                            <label for="skills">Skills*</label>
                                <div className='form-group'>
                                    <TextField style={{ textTransform: "lowercase" }}
                                        name="skill"
                                        placeholder="Eg: Html,Css.."
                                        value={inputFields}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </form>
                        </Container>


                        <div className='container'>
                            <div className="justify-content-center">
                                <Button onClick={submitHandler}
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    style={{ width: "213px", height: "46px" }}
                                >Submit</Button>
                            </div>
                        </div>
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

export default EditProfile;
