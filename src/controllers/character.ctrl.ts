import { Request, Response } from "express"
import { getCharactersFromDb, insertCharacterIntoDb, removeCharacterFromDb, updateCharacterIntoDb } from "../repositories/character.repo.js"
import { Character, CharacterFields } from "../types/character.type.js";




export async function getCharacters(req: Request, res: Response){
    try {
        const { id } = res.locals as {id: string};
        const {rows: characters} = await getCharactersFromDb(id);
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


export async function updateCharacter(req: Request, res: Response){
    try {
        const {id, updatedCharacter} = res.locals as {id: string, updatedCharacter: CharacterFields};
        await updateCharacterIntoDb(id, updatedCharacter);
        res.sendStatus(200);
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}



export async function removeCharacter(req: Request, res: Response){
    try {
        const { id } = res.locals as {id: string};
        await removeCharacterFromDb(id);
        res.sendStatus(200);

    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}