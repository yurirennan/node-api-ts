import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUserController.handle);

export { userRoutes };