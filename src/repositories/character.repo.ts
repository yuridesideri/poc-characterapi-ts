import connection from "../database/db.js";
import { Character } from "../types/character.type.js";

export function getCharactersFromDb(){
    return connection.query("SELECT * FROM characters")
}

export function insertCharacterIntoDb(character: Character){
    const {name, race, description, age, height, u_obj, sex, image = null} = character;
    return connection.query(` 
    INSERT INTO 
    characters (name, race, description, age, height, u_obj, sex, image) 
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8);
    `,[name, race, description, age, height, u_obj, sex, image])
} 