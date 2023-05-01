import express, {Express, Request, Response} from 'express'
import Post from '../models/Post'

async function getPost(req: Response, res: Response): Promise<void> {
    try {
        const posts = await Post.find({})
        res.send({posts})
    } catch (err) {
        console.log(err);
        res.send({message : "error"})
    }
}

async function postPost(req: Response, res: Response) : Promise<void> {
    try {
        const post = await Post.create(req.body)
        res.send({post})
    } catch (err) {
        console.log(err);
        res.send({message : "error"})
    }
}

async function deletePost(req: Response, res: Response): Promise<void> {
    try {
        const id: string = req.params.id
        const post = await Post.deleteOne({_id: id})
        res.send({post})
    } catch(err) {
        console.log(err);
        res.send({message : "error"})
    }
}

async function updatePost(req: Response, res: Response): Promise<void> {
    try {
        const id: string = req.params.id
        const content: string = req.body.content
        const post = await Post.findByIdAndUpdate(id, { content : content}, {new: true})
        res.send({post})
    } catch(err) {
        console.log(err);
        res.send({message : "error"})
    }
}

export default {getPost, postPost, deletePost, updatePost}