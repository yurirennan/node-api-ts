import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { loginValidator } from "../validators/loginValidator";
import { validateRequest } from "../validators/validateRequest";

const authController = new AuthController();

const authRoutes = Router();

authRoutes.post("/", validateRequest(loginValidator), authController.handle);

export { authRoutes };