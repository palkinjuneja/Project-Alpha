import mongoose from 'mongoose';

// Collaboration Schema
const collaborationSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project',  // to refer to Project Collection
        required: true
    },
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',  // to refer to User Collection
        required: true
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',  // to refer to User Collection
        required: true
    },
    status_of_request: {
        type: String,  // pending, accepted, rejected
        required: true
    }
});

const Collaboration = mongoose.model('Collaboration', collaborationSchema);
export default Collaboration