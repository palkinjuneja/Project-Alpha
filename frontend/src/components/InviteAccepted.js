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
    height:'150px'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 function InviteAccepted({modalAction,projectId,projectName,userId,ownerName,ownerId,ownerLinkedIn,ownerEmail,ownerRole}) {
  const [open, setOpen] = React.useState(modalAction);
 
  const handleClose = () => {
    setOpen(false);
  }; 
  

  const handleAccept=((event)=>{
      console.log("Request Accepted");
      // Send to Project Url
  })


  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Collaboration Request Accepted &nbsp; &nbsp; &nbsp; &nbsp;
        </DialogTitle>
        <DialogContent dividers>
        
          <Typography gutterBottom>
          <span className={style.ImageBox}>Image</span>
            <span className={style.UserName}>{ownerName}</span>
          </Typography>
          <Typography gutterBottom>
            <span className={style.UserRole}>{ownerRole}</span>
          </Typography>
         <Typography gutterBottom>
         {ownerName} has accepted your request for collaboration on {projectName}
         <p>
             <a target="_blank" href= {ownerLinkedIn}><LinkedInIcon/></a>
         <a target="_blank" href= {ownerEmail}><MailIcon/></a></p>
          </Typography>  
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAccept} color="success">
            Project Link
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InviteAccepted;
