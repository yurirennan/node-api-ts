import { Router } from "express";

import { CreateVideoController } from "../controllers/CreateVideoController";
import { DeleteVideoController } from "../controllers/DeleteVideoController";
import { ListVideoController } from "../controllers/ListVideoController";
import { UpdateVideoController } from "../controllers/UpdateVideoController";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

import { validateRequest } from "../validators/validateRequest";
import { postVideoValidator } from "../validators/postVideoValidator";
import { putVideoValidator } from "../validators/putVideoValidator";

const videoRoutes = Router();

const createVideoController = new CreateVideoController();
const listVideoController = new ListVideoController();
const updateVideoController = new UpdateVideoController();
const deleteVideoController = new DeleteVideoController();

videoRoutes.use(ensureAuthenticated);
videoRoutes.post("/", validateRequest(postVideoValidator), createVideoController.handle);
videoRoutes.get("/", listVideoController.handle);
videoRoutes.put("/:id", validateRequest(putVideoValidator), updateVideoController.handle);
videoRoutes.delete("/:id", deleteVideoController.handle);

export { videoRoutes };