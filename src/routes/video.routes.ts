import { Router } from "express";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { DeleteVideoController } from "../controllers/DeleteVideoController";
import { ListVideoController } from "../controllers/ListVideoController";
import { UpdateVideoController } from "../controllers/UpdateVideoController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const videoRoutes = Router();

const createVideoController = new CreateVideoController();
const listVideoController = new ListVideoController();
const updateVideoController = new UpdateVideoController();
const deleteVideoController = new DeleteVideoController();

videoRoutes.use(ensureAuthenticated);
videoRoutes.post("/", createVideoController.handle);
videoRoutes.get("/", listVideoController.handle);
videoRoutes.put("/:id", updateVideoController.handle);
videoRoutes.delete("/:id", deleteVideoController.handle);

export { videoRoutes };