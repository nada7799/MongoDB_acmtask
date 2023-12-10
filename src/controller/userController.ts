import { Request,Response } from "express";
import { getAllCurrentUsersAsync,getUserByIdAsync,createNewUserAsync } from "../services/userService";
import mongoose from "mongoose";
const getAllCurrentUsersController = async (req:Request,res:Response)=>{
    try{
const allusersReturned= await getAllCurrentUsersAsync();
res.status(200).json({Message:"Success getting all users", Data: allusersReturned});
    }
    catch(error:Error|any){
        res.status(405).json({error});
    }
}
const getUserByIdController = async (req:Request,res:Response)=>{
let id :mongoose.Types.ObjectId = req.params.id as mongoose.Types.ObjectId | any ;
    try{
        let theUser= await getUserByIdAsync(id);
        res.status(200).json({Message:"Success helloooo", Data: theUser});
            }
    catch(error:Error|any){
                res.status(406).json({error});
            }
}

const createNewUserController= async (req:Request,res:Response)=>{
        const{name,Email,phoneNo} = req.body;
    try{
        await createNewUserAsync(name,Email,phoneNo);
        res.status(201).json({Message:"User added successfully"});
            }
    catch(error:Error|any){
                res.status(407).json({error});
            }
}
export {getAllCurrentUsersController,getUserByIdController,createNewUserController};