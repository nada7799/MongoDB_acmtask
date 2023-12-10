import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from "dotenv";
dotenv.config({ path:  "src\.env" });
import userRouter from './Routes/userRoutes';
import toDoRouter from './Routes/toDoRoutes';
export const app = express();
const port = 3000;
const uri : string = process.env.MONGODB_URL;
mongoose.connect(("mongodb+srv://nadaahmed2727:LYenznXiLQxgfMm5@acmtask3.o3dn786.mongodb.net/Todo_user")).then(()=> {
    console.log("connection is right ");
});
app.use(express.json());
app.use("/todos",toDoRouter);
app.use("/users",userRouter);


app.listen(3000, ()=>{
    console.log("helooooz");
});
