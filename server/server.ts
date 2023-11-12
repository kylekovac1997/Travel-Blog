import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import destinationsRouter from "./routes/DestinationsRoute"
dotenv.config();

const app: Express = express();
app.use(cors())
app.use(express.json());
const port = 3000;


app.use("/api", destinationsRouter )

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});