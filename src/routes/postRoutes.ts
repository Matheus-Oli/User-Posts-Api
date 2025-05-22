import { Router } from "express";
import PostController from "../controllers/postController";
import AuthMiddlewares from "../middlewares/authMiddlewares";

const postRouter = Router();

// Rota para listar todos os posts
postRouter.get("/api/posts", AuthMiddlewares, PostController.listPosts);

// Rota para criar um novo post
postRouter.post("/api/post", AuthMiddlewares, PostController.createPost);

// Rota para atualizar um post pelo ID
postRouter.patch("/api/post/:id", AuthMiddlewares, PostController.updatePost);

// Rota para excluir um post pelo ID
postRouter.delete("/api/post/:id", AuthMiddlewares, PostController.deletePost);

// Rota para buscar um post específico pelo ID
postRouter.get("/api/post/:id", AuthMiddlewares, PostController.getPostById);

export default postRouter;