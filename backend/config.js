

 var config = {
    'linkedinAuth': {
      'clientID': '86q8czzy4de81z', // your App ID
      'clientSecret': 'MAkDC6DTdALy0cuq', // your App Secret
      'callbackURL':'http://127.0.0.1:9000/auth/linkedin/callback'
      // uncomment the below line for prod and comment the above line
      //'callbackURL':process.env.LINKEDIN_REDIRECT+'/auth/linkedin/callback'
      
    }
    
  };
  console.log("We did console "+process.env.LINKEDIN_REDIRECT)
  export default config