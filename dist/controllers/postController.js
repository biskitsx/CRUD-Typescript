"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../models/Post"));
async function getPost(req, res) {
    try {
        const posts = await Post_1.default.find({});
        res.send({ posts });
    }
    catch (err) {
        console.log(err);
        res.send({ message: "error" });
    }
}
async function postPost(req, res) {
    try {
        const post = await Post_1.default.create(req.body);
        res.send({ post });
    }
    catch (err) {
        console.log(err);
        res.send({ message: "error" });
    }
}
async function deletePost(req, res) {
    try {
        const id = req.params.id;
        const post = await Post_1.default.deleteOne({ _id: id });
        res.send({ post });
    }
    catch (err) {
        console.log(err);
        res.send({ message: "error" });
    }
}
async function updatePost(req, res) {
    try {
        const id = req.params.id;
        const content = req.body.content;
        const post = await Post_1.default.findByIdAndUpdate(id, { content: content }, { new: true });
        res.send({ post });
    }
    catch (err) {
        console.log(err);
        res.send({ message: "error" });
    }
}
exports.default = { getPost, postPost, deletePost, updatePost };
