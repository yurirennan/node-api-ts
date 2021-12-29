import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { ListCategoryController } from "../controllers/ListCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

import { validateRequest } from "../validators/validateRequest";
import { postCategoryValidator } from "../validators/postCategoryValidator";
import { putCategoryValidator } from "../validators/putCategoryValidator";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const categoryRoutes = Router();

categoryRoutes.use(ensureAuthenticated);
categoryRoutes.post(
  "/",
  ensureAdmin,
  validateRequest(postCategoryValidator),
  createCategoryController.handle
);
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.put(
  "/:id",
  ensureAdmin,
  validateRequest(putCategoryValidator),
  updateCategoryController.handle
);
categoryRoutes.delete("/:id", ensureAdmin, deleteCategoryController.handle);

export { categoryRoutes };
