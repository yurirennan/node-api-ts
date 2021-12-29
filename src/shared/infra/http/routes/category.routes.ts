import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/category/controllers/CreateCategoryController";
import { DeleteCategoryController } from "../../../../modules/category/controllers/DeleteCategoryController";
import { ListCategoryController } from "../../../../modules/category/controllers/ListCategoryController";
import { UpdateCategoryController } from "../../../../modules/category/controllers/UpdateCategoryController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

import { validateRequest } from "../../../validator/validateRequest";
import { postCategoryValidator } from "../../../../modules/category/validators/postCategoryValidator";
import { putCategoryValidator } from "../../../../modules/category/validators/putCategoryValidator";

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
