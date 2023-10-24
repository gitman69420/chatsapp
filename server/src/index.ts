import express from "express";
import { config as dotenvConfig } from "dotenv";

import { PORT } from "@src/config/port";

dotenvConfig();
const app = express();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})