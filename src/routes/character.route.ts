import { Router } from "express";
import { getCharacters, insertCharacter, updateCharacter } from "../controllers/character.ctrl.js";
import { characterValidationMid, updateCharacterMid } from "../middlewares/character.mid.js";

export const characterRouter = Router();

characterRouter.get("/characters", getCharacters)
characterRouter.post("/characters", characterValidationMid, insertCharacter);
characterRouter.put("/characters/:id", updateCharacterMid, updateCharacter);