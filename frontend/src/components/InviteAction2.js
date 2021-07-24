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
import style from '../stylesheet/InviteAction.module.css'
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
    height:'500px'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'center'
  },
}))(MuiDialogActions);

 function InviteAction2({modalAction,userName,userRole,userLinkedIn, userEmail, skills,userImage,projectId,collaborationId,userId,ownerName,ownerId}) {
  const [open, setOpen] = React.useState(modalAction);
  const [request,setRequest] = React.useState("");
  var skillList = [];
  const handleClose = () => {
    setOpen(false);
  };

  const updateList=(()=>{
    skills.map((eachSkill)=>{
      skillList.push("*"+eachSkill+"  ")
    })
    console.log("SkillList is "+skillList)
  })
  
  React.useEffect(() => {
    updateList()
    if(request=="accepted" || request=="rejected"){
      //update collaborationsTable
     // localhost:9000/getUsers/requestAction?id=60f838e41a7c48e0af361046&status=accepted&owner=palkin&userId=60f4062ab5c617448a43f76a&projectId=60ef23d37786d409b98d5c39
      const getRequest = process.env.REACT_APP_REQUEST_ACTION+"id="+collaborationId+
      "&status="+request+"&owner="+ownerId+
      "&projectId="+projectId+"&userId="+userId+"&user_name="+userName+"&ownerName="+ownerName;
      
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

console.log("EachSkill ",skills)
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Collaboration Invite &nbsp; &nbsp; &nbsp; &nbsp;
        </DialogTitle>
        <DialogContent dividers>
        
          <Typography gutterBottom>
          <div style={{display:'flex', justifyContent:'space-between',}}>
           
           <img className={style.ImageBox}src ="https://static.overlay-tech.com/assets/2ec1cdf0-ee25-4b06-a775-86ba85ff4196.png"/>
           
           <span style={{display:'flex' , flexDirection:'column', justifyContent:'center',alignItems:'center', justifyContent:'center'}}>
              <p><b>{userName}</b> <br></br> 
              {userRole} </p></span>
              <span style={{display:'flex' , flexDirection:'column', justifyContent:'center'}}> <a href={userLinkedIn}><LinkedInIcon/></a> <a href={userEmail}><MailIcon/></a></span>
           </div>
          <hr></hr>
          </Typography>
         <Typography gutterBottom>
           <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
           <p style={{padding:'0px', margin:'0px'}}> <b>Skills</b></p>
          <ul>           
            {skills.map((eachSkill) => {
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

export default InviteAction2;
