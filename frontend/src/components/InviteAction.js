import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import style from '../styles/InviteAction.module.css'
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const stylesTitle = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: 'black',
    color:'white',
   
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(stylesTitle)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height:'70%',
    
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'center'
  },
}))(MuiDialogActions);

 //function InviteAction({modalAction,userName,userRole,userLinkedIn, userEmail, skills,userImage,projectId,collaborationId,userId,ownerName,ownerId}) {
 function InviteAction({modalAction,data}){
  const currentUserData = JSON.parse(localStorage.getItem('userDetails'))

 const [open, setOpen] = React.useState(modalAction);
  const [request,setRequest] = React.useState("");
 
  const handleClose = () => {
    setOpen(false);
  };

  
  
  React.useEffect(() => {
  
    if(request=="accepted" || request=="rejected"){
      //update collaborationsTable
     // localhost:9000/getUsers/requestAction?id=60f838e41a7c48e0af361046&status=accepted&owner=palkin&userId=60f4062ab5c617448a43f76a&projectId=60ef23d37786d409b98d5c39
      const getRequest = process.env.REACT_APP_REQUEST_ACTION+"id="+data.collab._id+
      "&status="+request+"&owner="+data.project.owner_id+
      "&projectId="+data.project._id+"&userId="+data.user._id+"&userName="+data.user.name+"&ownerName="+data.project.owner;
      console.log(getRequest)
      
      axios.put(getRequest).then(res=>{
            console.log("Request Handled Successfully");
            setOpen(false)
        }).catch(err=>{
            console.log("error:",{err});
            return (
            <div>{err}</div>
            )
        })
    }
    
    
  }, [request])

  const handleAccept=((event)=>{
      console.log("Request Accepted");
      setRequest("accepted")  
      handleClose()   
  })
  const handleDecline=((event)=>{
    console.log("Request Declined")
    setRequest("rejected")
    handleClose()
})


  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Collaboration Invite &nbsp; &nbsp; &nbsp; &nbsp;
        </DialogTitle>
        <DialogContent dividers>
        
          <Typography gutterBottom>
          <div style={{display:'flex', justifyContent:'space-between',}}>
           
           <img className={style.ImageBox}src ={data.user.photo}/>
           
           <span style={{display:'flex' , flexDirection:'column', justifyContent:'center',alignItems:'flex-start'}}>
              <p><b>{data.user.name}</b> <br></br> 
              {data.user.role} </p>
              <br></br><p><MailIcon/>  {data.user.email}</p>
              </span>
              <span style={{display:'flex' , flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}> <a href={data.user.linkedin}><LinkedInIcon/></a> </span>
           </div>
          <hr></hr>
          </Typography>
         <Typography gutterBottom>
           <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
           <p style={{padding:'0px', margin:'0px'}}> <b>Skills</b></p>
          <ul>           
            {data.user.skill.map((eachSkill) => {
                return (
                  <li>{eachSkill}</li>
                )
            })}
          </ul>
           </div>
           
          </Typography>  
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAccept} style={{backgroundColor:'#08ad2c', color:'white'}}>
            Accept
          </Button>
          <Button autoFocus onClick={handleDecline} style={{backgroundColor:'#F42B2B', color:'white'}}>
            Decline
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InviteAction;
