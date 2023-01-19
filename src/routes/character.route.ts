import { Router } from "express";
import { getCharacters } from "../controllers/character.ctrl.js";

export const characterRouter = Router();

characterRouter.get("/characters", getCharacters)