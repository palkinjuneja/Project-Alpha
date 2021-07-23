import mongoose from 'mongoose';

const collaboratorSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User', //refers to User Collection
        required: true
    },
    name:{
        type: String,
        required: true
    }
});

// Project Schema
const projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
   owner:{
        type: String,
        required : true
	},
    owner_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'User', //refers to User Collection
        required: true
    },
    date_of_creation:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String, //open-for-colab, active, completed   
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    requirement: {
        type: [String],
        required: true
    },
    collaborators: [collaboratorSchema]
})

const Project = mongoose.model('Project', projectSchema);
export default Project