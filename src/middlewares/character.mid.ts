import { NextFunction, Request, Response } from "express";
import { characterSchema } from "../models/character.model.js";
import { Character } from "../types/character.type";





export async function characterValidationMid(req: Request, res: Response, next: NextFunction){
    try { 
        const character = req.body as Character
        const validatedCharacter = await characterSchema.validateAsync(character);
        res.locals.character = validatedCharacter;
        next()
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}