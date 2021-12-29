import { Router } from "express";

import { AuthController } from "../../../../modules/auth/controllers/AuthController";

import { validateRequest } from "../../../validator/validateRequest";
import { loginValidator } from "../../../../modules/auth/validators/loginValidator";

const authController = new AuthController();

const authRoutes = Router();

authRoutes.post("/", validateRequest(loginValidator), authController.handle);

export { authRoutes };