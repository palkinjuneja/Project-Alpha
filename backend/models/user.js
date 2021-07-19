import mongoose from 'mongoose';

// User Schema
// [Nayan]: revisit this schema once the requirements become more clear

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
        required: false
    },
    overview: {
        type: String,
        required: false
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
        required: true
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
    }
});


const User = mongoose.model('User', userSchema);
//module.exports = User;

export default User;