import mongoose from 'mongoose'

const emergencySchema = new mongoose.Schema({
    fullName:{
    type: String,
    required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    emergencyType:{
        type: String,
        required: true,
        enum: ['fire', 'medical', 'accident', 'violence', 'security', 'other'],
        default: 'other'
    },
    description:{
        type: String,
        required: true,
    },
    location:{
    type: String,
    required: true,    
    },
    viewed:{
        type: Boolean,
        default: false,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const emergencyModel = mongoose.model('Emergency', emergencySchema)
export default emergencyModel