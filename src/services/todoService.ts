
import mongoose from "mongoose";
import ToDo from "../models/toDo";
async function getAllTodosAsync() {
    try{
    let alltodos = await ToDo.find();
        if(!alltodos){
            throw new Error("todo is empty");
        }
    return alltodos;
    }
    catch(error){
        throw error;
    }
}

async function getTodosOfaCertainUserAsync(Userid:mongoose.Types.ObjectId) {
    try{
    let todolist= await ToDo.find({Userid:Userid});
    return todolist;
    }
    catch(error){
        throw error;
    }
}
async function addaToDoAsync(title: string , description:string, Userid:mongoose.Types.ObjectId) {
    try{
        await ToDo.create({title,description,Userid});
    }
    catch(error){
        throw new Error("user is not found so we cannot add the task");
    }
}
export {getAllTodosAsync,getTodosOfaCertainUserAsync,addaToDoAsync};