import pkg from 'mongoose';
const { Schema, model } = pkg

// User Schema
// [Nayan]: revisit this schema once the requirements become more clear

const userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
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
        required: false
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
        type: [Schema.Types.ObjectId],         // refers to Project Collection from User
        ref: 'Project',
        required: true
    }
});

const User = model('User', userSchema);
export default User;