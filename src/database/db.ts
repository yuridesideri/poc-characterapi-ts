import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config();

const connection = new pg.Pool({ 
    connectionString: process.env.DATABASE_URL, 
    // ssl: true 
});



export default connection;
