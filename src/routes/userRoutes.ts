import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

// Listar todos os usuários
userRouter.get("/api/users", userController.getUsers);

// Buscar um usuário por ID
userRouter.get("/api/user/:id", userController.getUserById);

// Criar novo usuário
userRouter.post("/api/user", userController.createUser);

// Atualizar usuário existente
userRouter.patch("/api/user/:id", userController.updateUser);

// Deletar usuário
userRouter.delete("/api/user/:id", userController.deleteUser);

export default userRouter;
