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
    height:'150px'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 function InviteAction2({modalAction,userName,userRole,skills,userImage,projectId,collaborationId,userId,ownerName,ownerId}) {
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
        }).catch(err=>{
            console.log("error:",{err});
            return (
            <div>{err}</div>
            )
        })
    }
    
    
  }, [])

  const handleAccept=((event)=>{
      console.log("Request Accepted");
      setRequest("accepted")     
  })
  const handleDecline=((event)=>{
    console.log("Request Declined")
    setRequest("rejected")
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
          <span className={style.ImageBox}>{userImage}</span>
            <span className={style.UserName}>{userName}</span>
          </Typography>
          <Typography gutterBottom>
            <span className={style.UserRole}>{userRole}</span>
          </Typography>
         <Typography gutterBottom>
          <ul className={style.UserSkill}>           
            {skills.map((eachSkill) => {
                
                return (
                  <li>{eachSkill}</li>
                )
            })}
          </ul>
          </Typography>  
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAccept} color="success">
            Accept
          </Button>
          <Button autoFocus onClick={handleDecline} color="danger">
            Decline
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InviteAction2;
