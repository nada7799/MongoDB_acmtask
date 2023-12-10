import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name : {type: String , required:[true, "username is required"]},
    Email : {type: String , required:[true , "Email is required"], unique:true},
    phoneNo : {type: String , required:[true , "phone number is required"], unique:true, max_length:50},

});

const User = mongoose.model("User",userschema);
export default User;
