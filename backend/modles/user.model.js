import mongoose from 'mongoose';

//createat and updateat fields will be automatically added to the doc
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastlogin:{
        type: Date,
        default: Date.now
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);