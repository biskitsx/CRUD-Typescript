"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// package import
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// file import
const db_1 = __importDefault(require("./config/db"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
// dotenv config
dotenv_1.default.config();
// basic
const app = (0, express_1.default)();
const PORT = process.env.PORT || 6565;
// mongoDB
(0, db_1.default)();
// middleware
app.use(express_1.default.json());
// routes
app.get('/', (req, res) => { res.send("hello"); });
app.use(postRoutes_1.default);
// listen
app.listen(PORT, () => {
    console.log(`NodeServer : http://localhost:${PORT}`);
});
