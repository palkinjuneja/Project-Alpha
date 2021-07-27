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
    maxHeight:'500px'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent:'center'
  },
}))(MuiDialogActions);

 function InviteDeclined({modalAction,data}) {
  const [open, setOpen] = React.useState(modalAction);
 
  const handleClose = () => {
    setOpen(false);
  }; 
  

  const handleAccept=((event)=>{
      console.log("Request Accepted");
      // Send to Project Url
      window.location.href="/Project"
  })


  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Request Declined
        </DialogTitle>
        <DialogContent dividers>
        
          <Typography gutterBottom>
          
          <div style={{display:'flex', justifyContent:'space-between',}}>
           
           <img className={style.ImageBox}src ={data.user.photo}/>
           
           <span style={{display:'flex' , flexDirection:'column', justifyContent:'center',alignItems:'center', justifyContent:'center'}}>
              <p><b>{data.user.name}</b> <br></br> 
              {data.user.role}
              <br></br> <p><MailIcon/> {data.user.email}</p> </p></span>
              <span style={{display:'flex' , flexDirection:'column', justifyContent:'center'}}> <a href={data.user.linkedin}><LinkedInIcon/></a> </span>
           </div>
          <hr></hr>
          </Typography>
          
         <Typography gutterBottom>
           
           <p>Better Luck Next Time !! </p>
           <p>Unfortunately <b>{data.user.name}</b> has declined your request for collaboration on project <b>{data.project.project_name}</b></p>
         
          </Typography>  
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAccept}  style={{backgroundColor:'#08ad2c', color:'white'}}>
            Explore Projects
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InviteDeclined;
