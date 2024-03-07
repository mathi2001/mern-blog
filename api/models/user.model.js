import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },   
    profilePicture:{
        type: String,
        default:"https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png"
    }
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);
export default User;