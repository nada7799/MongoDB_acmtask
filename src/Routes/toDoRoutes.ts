import { Router } from "express";
import { addaToDoController,getAllTodosController,getTodosOfaCertainUserController } from "../controller/todoController";
const toDoRouter = Router();
toDoRouter.get("/",getAllTodosController);
toDoRouter.get("/:id",getTodosOfaCertainUserController);
toDoRouter.post("/",addaToDoController);
export default toDoRouter;