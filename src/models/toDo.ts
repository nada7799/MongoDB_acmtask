import mongoose from "mongoose";
import User from "./users";
const toDoschema = new mongoose.Schema({
    title : {type: String , required:[true, "todo title is required"], max_length:50},
    description : {type: String ,max_length:200},
    Userid: {
        type : mongoose.Types.ObjectId,
        ref : "User",
    }

});

const ToDo = mongoose.model("Todo",toDoschema);
export default ToDo;
