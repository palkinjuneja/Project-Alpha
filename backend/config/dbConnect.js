const mongoose = require('mongoose');

//connect and create a new db "projectAlpha
const dbConnect = () =>{
    mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB connected"))
    .catch((error) => console.log(error));
}

module.exports = dbConnect;
