"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB() {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            console.log(`mongoURI not found in env`);
        }
        else {
            const db = await mongoose_1.default.connect(mongoURI);
            console.log(`Connected to Database Successfully`);
        }
    }
    catch (err) {
        console.log(err);
    }
}
exports.default = connectDB;
