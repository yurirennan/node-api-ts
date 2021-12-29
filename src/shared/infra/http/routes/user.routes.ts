import { Router } from "express";

import { CreateUserController } from "../../../../modules/users/controllers/CreateUserController";
import { ListUserController } from "../../../../modules/users/controllers/ListUserController";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { validateRequest } from "../../../validator/validateRequest";
import { postUserValidator } from "../../../../modules/users/validators/postUserValidator";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRoutes.post("/", validateRequest(postUserValidator), createUserController.handle);
userRoutes.get("/", ensureAuthenticated, ensureAdmin, listUserController.handle);

export { userRoutes };