import { Router } from "express";

import { CreateVideoController } from "../../../../modules/videos/controllers/CreateVideoController";
import { DeleteVideoController } from "../../../../modules/videos/controllers/DeleteVideoController";
import { ListVideoController } from "../../../../modules/videos/controllers/ListVideoController";
import { UpdateVideoController } from "../../../../modules/videos/controllers/UpdateVideoController";

import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

import { validateRequest } from "../../../validator/validateRequest";
import { postVideoValidator } from "../../../../modules/videos/validators/postVideoValidator";
import { putVideoValidator } from "../../../../modules/videos/validators/putVideoValidator";


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