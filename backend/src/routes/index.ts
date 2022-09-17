import { Router } from "express";
import { toolsRouter } from "./tools.routes";

export const routes = Router();

routes.use("/tools", toolsRouter);
