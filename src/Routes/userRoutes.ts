import { Router } from "express";
import { getAllCurrentUsersController,getUserByIdController,createNewUserController } from "../controller/userController";
const userRouter = Router();
userRouter.get("/",getAllCurrentUsersController);
userRouter.get("/:id",getUserByIdController);
userRouter.post("/",createNewUserController);
export default userRouter;