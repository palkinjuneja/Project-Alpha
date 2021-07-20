import pkg from 'mongoose';  // mongoose is CommonJs module (ES6)
const {connect}=pkg;

//connect and create a new db "projectAlpha
const dbConnect = () =>{
    console.log(process.env.MONGODB_URL);
    connect(process.env.MONGODB_URL, {
                                        useNewUrlParser: true,
                                        useUnifiedTopology: true,
                                        useCreateIndex: true,
                                        useFindAndModify: true
                                    })
    .then(() => console.log("DB connected"))
    .catch((error) => console.log(error));
}

export default dbConnect;
