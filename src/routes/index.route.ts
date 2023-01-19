import { Router } from "express";
import { characterRouter } from "./character.route.js";


export const indexRouter = Router();

indexRouter.use(characterRouter);