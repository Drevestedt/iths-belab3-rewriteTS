import express, {} from "express";
import cors from "cors";
import sqlPool from "./config/sqlDb.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
//# sourceMappingURL=app.js.map