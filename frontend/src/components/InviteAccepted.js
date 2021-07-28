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
    height:'450px'
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
    height:'200px'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent:'center'
  },
}))(MuiDialogActions);

 function InviteAccepted({modalAction,data}) {
  const [open, setOpen] = React.useState(modalAction);
 
  const handleClose = () => {
    setOpen(false);
  }; 
  

  const handleAccept=((event)=>{
      console.log("Request Accepted");
      // Send to Project Url
      window.location.href="/projectDetails/"+data.project._id
  })


  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Collaboration Request Accepted &nbsp; &nbsp; &nbsp; &nbsp;
        </DialogTitle>
        <DialogContent dividers>
        
          <Typography gutterBottom>
         
          <div style={{display:'flex', justifyContent:'space-between',}}>
           
           <img className={style.ImageBox}src ={data.user.photo}/>
           
           <span style={{display:'flex' , flexDirection:'column', justifyContent:'center',alignItems:'center', justifyContent:'center'}}>
              <p><b>{data.user.name}</b> <br></br> 
              {data.user.role} </p><br></br> <p><MailIcon/> {data.user.email}</p></span>
              <span style={{display:'flex' , flexDirection:'column', justifyContent:'center'}}> <a href={data.user.linkedin}><LinkedInIcon/></a></span>
           </div>
          <hr></hr>
          </Typography>
         <Typography gutterBottom>
         {data.user.name} has accepted your request for collaboration on {data.project.project_name}
          </Typography>  
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={handleAccept}  style={{backgroundColor:'#08ad2c', color:'white'}}>
            Project Link
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InviteAccepted;
