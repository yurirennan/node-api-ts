import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

import { validateRequest } from "../validators/validateRequest";
import { postUserValidator } from "../validators/postUserValidator";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRoutes.post("/", validateRequest(postUserValidator), createUserController.handle);
userRoutes.get("/", ensureAuthenticated, ensureAdmin, listUserController.handle);

export { userRoutes };