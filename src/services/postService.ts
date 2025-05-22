import prisma from "../lib/prisma";

class PostService {
    // Listar todos os posts
    static async listPosts() {
        try {
            const posts = await prisma.user.findMany();
            return posts;
        } catch (error) {
            throw new Error("Erro ao listar os posts");
        }
    }

    // Criar um novo post
    static async createPost(title: string, content: string, published: boolean, authorId: number) {
        try {
            const newPost = await prisma.post.create({
                data: {
                    title,
                    content,
                    published,
                    authorId
                },
            });
            return newPost;
        } catch (error) {
            throw new Error("Erro ao criar o post");
        }
    }

    // Atualizar um post
    static async updatePost(id: number, title?: string, content?: string, published?: boolean) {
        try {
            const updatedPost = await prisma.post.update({
                where: { id },
                data: {
                    title,
                    content,
                    published
                },
            });
            return updatedPost;
        } catch (error) {
            throw new Error("Erro ao atualizar o post");
        }
    }

    // Excluir um post
    static async deletePost(id: number) {
        try {
            await prisma.post.delete({
                where: { id },
            });
            return { message: "Post deletado com sucesso" };
        } catch (error) {
            throw new Error("Erro ao deletar o post");
        }
    }

    // Buscar um post específico
    static async getPostById(id: number) {
        try {
            const post = await prisma.post.findUnique({
                where: { id },
                include: { author: true },
            });
            return post;
        } catch (error) {
            throw new Error("Erro ao buscar o post");
        }
    }
}

export default PostService;
