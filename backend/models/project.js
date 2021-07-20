import pkg from 'mongoose';
const { Schema, model } = pkg
const collaboratorSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'User', //refers to User Collection
        required: true
    },
    name:{
        type: String,
        required: true
    }
});

// Project Schema
const projectSchema = new Schema({
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
        type: Schema.ObjectId,
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
    requirements: {
        type: [],
        required: true
    },
    collaborators: [collaboratorSchema]
})

const Project = model('Project', projectSchema);
export default Project;