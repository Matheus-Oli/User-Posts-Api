import { Router } from "express";
import PostController from "../controllers/postController";

const postRouter = Router();

// Rota para listar todos os posts
postRouter.get("/api/posts", PostController.listPosts);

// Rota para criar um novo post
postRouter.post("/api/post", PostController.createPost);

// Rota para atualizar um post pelo ID
postRouter.patch("/api/post/:id", PostController.updatePost);

// Rota para excluir um post pelo ID
postRouter.delete("/api/post/:id", PostController.deletePost);

// Rota para buscar um post específico pelo ID
postRouter.get("/api/post/:id", PostController.getPostById);

export default postRouter;