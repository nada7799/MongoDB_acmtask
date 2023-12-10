import { Request,Response } from "express";
import mongoose from "mongoose";
import { getAllTodosAsync,getTodosOfaCertainUserAsync,addaToDoAsync } from "../services/todoService";

const getAllTodosController = async(req:Request,res:Response)=>{
try{
    let alltodosreturned = await getAllTodosAsync();
    res.status(200).json({Message:"Success", Data: alltodosreturned});
}
catch(error){
    res.status(408).json({error});
}
}
const getTodosOfaCertainUserController = async(req:Request,res:Response)=>{
    let id :mongoose.Types.ObjectId = req.params.id as mongoose.Types.ObjectId | any ;
    try{
        let alltodosofUserreturned = await getTodosOfaCertainUserAsync(id);
        res.status(200).json({Message:"Successfully returned todos", Data: alltodosofUserreturned});
    }
    catch(error){
        res.status(409).json({error});
    }
}
const addaToDoController = async(req:Request,res:Response)=>{
    const {title,description,Userid} = req.body;
    try{
        let sametodo = await addaToDoAsync(title,description,Userid);
        res.status(201).json({Message:"Task added successfully"});
    }
    catch(error){
        res.status(417).json({error});
    }
}
export {addaToDoController,getAllTodosController,getTodosOfaCertainUserController};
