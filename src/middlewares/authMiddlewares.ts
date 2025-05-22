import { NextFunction, Request, Response } from "express";
//posso importar o prisma para ver se o usuario esta autenticado para fazer a requisicao

export default async function AuthMiddlewares(req: Request, res: Response, next: NextFunction) {
    //funcoes de autentificacao

    if(1 == 1) {
        next;
    } else {
        res.status(401).json ({
            status: "error",
            message:"Usuario nao autorizado"
        })
    }
}