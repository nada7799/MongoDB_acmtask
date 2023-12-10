
import mongoose from "mongoose";
import User from "../models/users"
async function getAllCurrentUsersAsync(){
    try{
    let allusers = await User.find();
    if(!allusers)
        throw new Error("user list is empty");
        
    return allusers;
    }
    catch(error){
        throw error;
    }
}
async function getUserByIdAsync(_id : mongoose.Types.ObjectId) {
    try{
        let userr = await User.findById(_id);
        if(!userr){
            throw new Error("user id not found in data");
        }
        return userr;
    }
    catch(error){
    throw error;
    }
}
async function createNewUserAsync(name: string , Email: string , phoneNo: string) {
    try{
        await User.create({name,Email,phoneNo});
    }
    catch(error){
    throw error;
    }
}
export{getAllCurrentUsersAsync,getUserByIdAsync,createNewUserAsync};