import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors"

import { categoryRoutes } from "./routes/category.routes";

import { ErrorHandler } from "./middlewares/ErrorHandler";

dotenv.config();
import "./database/index";
import { videoRoutes } from "./routes/video.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/videos", videoRoutes);

app.use(ErrorHandler);


export { app };