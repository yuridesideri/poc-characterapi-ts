import connection from "../database/db.js";

export function getCharactersFromDb(){
    return connection.query("SELECT * FROM characters")
}