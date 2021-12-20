import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", ensureAuthenticated, ensureAdmin, listUserController.handle);

export { userRoutes };