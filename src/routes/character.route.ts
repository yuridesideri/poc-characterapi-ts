import { Router } from "express";
import { getCharacters, insertCharacter, removeCharacter, updateCharacter } from "../controllers/character.ctrl.js";
import { characterValidationMid, removeCharacterMid, updateCharacterMid } from "../middlewares/character.mid.js";

export const characterRouter = Router();

characterRouter
.get("/characters", getCharacters)
.post("/characters", characterValidationMid, insertCharacter)
.put("/characters/:id", updateCharacterMid, updateCharacter)
.delete("/characters/:id", removeCharacterMid, removeCharacter);