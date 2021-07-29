import mongoose from 'mongoose';

// User Schema
// [Nayan]: revisit this schema once the requirement become more clear
// some values modified

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    skill: {
        type: [String],
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: false  
    },
    portfolio: {
        type: String,
        required: false
    },
    project_id: {
        type: [mongoose.Schema.Types.ObjectId],         // refers to Project Collection from User
        ref: 'Project',
        required: false
    },
    login_token: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    collaboration_request_id: {
        type: [mongoose.Schema.Types.ObjectId],         //refers to Collaboration Collection from User
        ref: 'Collaboration',
        required: false
    },

    time :{
        type: Number,
        required : true
    },
    
    photo :{
        type : String,
        required : true
    }
});

const User = mongoose.model('User', userSchema);
export default User