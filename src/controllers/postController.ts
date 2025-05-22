import { Request, Response } from "express";
import PostService from "../services/postService";

class PostController {
    // Listar todos os posts
    async listPosts(req: Request, res: Response) {
        try {
            const posts = await PostService.listPosts();
            res.status(200).json({ status: "ok", posts });
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }

    // Criar um novo post
    async createPost(req: Request, res: Response):Promise<void> {
        const { title, content, published, authorId } = req.body;

        if (!title || !authorId) {
            res.status(400).json({
                status: "badrequest",
                message: "Título e ID do autor são obrigatórios",
            });
        }

        try {
            const newPost = await PostService.createPost(title, content, published || false, authorId);
            res.status(201).json({ status: "ok", post: newPost });
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }

    // Atualizar um post
    async updatePost(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { title, content, published } = req.body;

        if (!id) {
            res.status(400).json({
                status: "badrequest",
                message: "ID é obrigatório",
            });
        }

        try {
            const updatedPost = await PostService.updatePost(Number(id), title, content, published);
            res.status(200).json({ status: "ok", post: updatedPost });
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }

    // Excluir um post
    async deletePost(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({
                status: "badrequest",
                message: "ID é obrigatório",
            });
        }

        try {
            const result = await PostService.deletePost(Number(id));
            res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }

    // Buscar um post por ID
    async getPostById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({
                status: "badrequest",
                message: "ID é obrigatório",
            });
        }

        try {
            const post = await PostService.getPostById(Number(id));
            if (!post) {
                res.status(404).json({
                    status: "notfound",
                    message: "Post não encontrado",
                });
            }
            res.status(200).json({ status: "ok", post });
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
}

export default new PostController();