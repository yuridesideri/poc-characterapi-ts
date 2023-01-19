import { Request, Response } from "express"
import connection from "../database/db.js"
import { getCharactersFromDb } from "../repositories/character.repo.js"




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