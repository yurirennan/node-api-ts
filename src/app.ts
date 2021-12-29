import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors"

import { ErrorHandler } from "./middlewares/ErrorHandler";

dotenv.config();
import "./database/index";

import { userRoutes } from "./routes/user.routes";
import { videoRoutes } from "./routes/video.routes";
import { categoryRoutes } from "./routes/category.routes";
import { authRoutes } from "./routes/auth.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/login", authRoutes);
app.use("/users", userRoutes);
app.use("/videos", videoRoutes);
app.use("/categories", categoryRoutes);

app.use(ErrorHandler);


export { app };