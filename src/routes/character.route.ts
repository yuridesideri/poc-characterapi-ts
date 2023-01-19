import { Router } from "express";
import { getCharacters, insertCharacter } from "../controllers/character.ctrl.js";
import { characterValidationMid } from "../middlewares/character.mid.js";

export const characterRouter = Router();

characterRouter.get("/characters", getCharacters)
characterRouter.post("/characters", characterValidationMid, insertCharacter);