import express, { Express } from "express";
import { PrismaClient } from '../generated/prisma';
import userRouter from "./routes/userRoutes";
import postRouter from "./routes/postRoutes";
// import postRouter from "./routes/postRoutes";

const app: Express = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});