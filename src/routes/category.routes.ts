import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { ListCategoryController } from "../controllers/ListCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const categoryRoutes = Router();

categoryRoutes.use(ensureAuthenticated);
categoryRoutes.post("/", ensureAdmin, createCategoryController.handle);
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.put("/:id", ensureAdmin,updateCategoryController.handle);
categoryRoutes.delete("/:id", ensureAdmin,deleteCategoryController.handle);

export { categoryRoutes };