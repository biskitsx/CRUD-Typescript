import express, { Router } from "express";
import postController from "../controllers/postController";
const router: Router = Router()

router.post("/post", postController.postPost)
router.get("/post", postController.getPost)
router.delete("/post/:id", postController.deletePost)
router.patch("/post/:id",postController.updatePost)
export default router