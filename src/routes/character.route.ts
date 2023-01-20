import { Router } from "express";
import { getCharacters, insertCharacter, removeCharacter, updateCharacter } from "../controllers/character.ctrl.js";
import { characterValidationMid, validateIdMid, updateCharacterMid } from "../middlewares/character.mid.js";

export const characterRouter = Router();

characterRouter
.get("/characters/:id?", validateIdMid, getCharacters)
.post("/characters", characterValidationMid, insertCharacter)
.put("/characters/:id", updateCharacterMid, updateCharacter)
.delete("/characters/:id", validateIdMid, removeCharacter);