import express, { Request, Response } from 'express';
import cors from 'cors';
import { indexRouter } from './routes/index.route.js';

const server = express()

server.use(express.json());
server.use(cors());
server.use(indexRouter);


server.get("/health", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
});


server.listen(4000, () => { console.log('Server is running on port 4000') } );