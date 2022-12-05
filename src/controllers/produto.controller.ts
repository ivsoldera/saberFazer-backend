import { Request, Response, Router } from "express";
import produtoService from "../services/produto.service";
import authMiddleware from '../middlewares/authMiddleware';

const produtoController = Router();

produtoController.post("/", async (req: Request, res: Response): Promise<Response> => {
    const user = req.body;
    const produtos = await produtoService.createProduto(user);
    return res.status(200).json(produtos);
})

produtoController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const produtos = await produtoService.getProdutos();

    return res.status(200).json(produtos);
})

produtoController.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const produtos = await produtoService.getProdutosById(Number(id));

    return res.status(200).json(produtos);
})

produtoController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user = req.body;
    const produtos = await produtoService.updateProduto(Number(id), user);

    return res.status(200).json(produtos);
})

produtoController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await produtoService.removeProduto(id);

    return res.status(201).json({message: 'Registro removido com sucesso'});
})


export default produtoController;