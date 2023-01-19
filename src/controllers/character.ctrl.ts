import { Request, Response } from "express"
import { getCharactersFromDb, insertCharacterIntoDb } from "../repositories/character.repo.js"
import { Character } from "../types/character.type.js";




export async function getCharacters(req: Request, res: Response){
    try {
        const {rows: characters} = await getCharactersFromDb();
        res.status(200)
        res.send(characters)
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}



export async function insertCharacter(req: Request, res: Response){
    try {
        const {character} = res.locals as {character: Character};
        await insertCharacterIntoDb(character);
        res.sendStatus(201);
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}