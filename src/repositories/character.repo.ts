import connection from "../database/db.js";
import { Character, CharacterFields } from "../types/character.type.js";

export function getCharactersFromDb() {
    return connection.query("SELECT * FROM characters");
}

export function insertCharacterIntoDb(character: Character) {
    const { name, race, description, age, height, u_obj, sex, image = null } = character;
    return connection.query(
        ` 
    INSERT INTO 
    characters (name, race, description, age, height, u_obj, sex, image) 
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8);
    `,
        [name, race, description, age, height, u_obj, sex, image]
    );
}

export function updateCharacterIntoDb(id: string, character: CharacterFields) {
    const keys = Object.keys(character);
    const values = Object.values(character);
    return connection.query(
        `
    UPDATE characters
    SET ${keys.map((key, index) => `${key} = $${index + 2}`).join(", ")}
    WHERE id = $1;
    `,
        [id, ...values]
    );
}

export function removeCharacterFromDb(id: string) {
    return connection.query(
        `
    DELETE FROM characters
    WHERE id = $1;
    `,
        [id]
    );
}