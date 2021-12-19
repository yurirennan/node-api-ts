import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { ListCategoryController } from "../controllers/ListCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.put("/:id", updateCategoryController.handle);
categoryRoutes.delete("/:id", deleteCategoryController.handle);

export { categoryRoutes };