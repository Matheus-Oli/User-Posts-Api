import { Router } from "express";
import userController from "../controllers/userController";
import AuthMiddlewares from "../middlewares/authMiddlewares";

const userRouter = Router();

// Listar todos os usuários
userRouter.get("/api/users", AuthMiddlewares, userController.getUsers);

// Buscar um usuário por ID
userRouter.get("/api/user/:id", AuthMiddlewares, userController.getUserById);

// Criar novo usuário
userRouter.post("/api/user", AuthMiddlewares, userController.createUser);

// Atualizar usuário existente
userRouter.patch("/api/user/:id", AuthMiddlewares, userController.updateUser);

// Deletar usuário
userRouter.delete("/api/user/:id", AuthMiddlewares, userController.deleteUser);

export default userRouter;
