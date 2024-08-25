import "dotenv/config";
import express from "express";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(morgan("common"))

const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});
app.get("/demo", (req, res) => res.status(200).send("Demo is working"))

app.listen(PORT, () => console.log("listening on port " + PORT))