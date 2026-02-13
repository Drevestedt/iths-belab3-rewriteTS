import express, { type Express } from "express";
import cors from "cors";
import sqlPool from "./config/sqlDb.js";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(cors());

// For aircraft models


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});