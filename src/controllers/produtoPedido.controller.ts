import { Request, Response, Router } from "express";
import produtoPedidoService from "../services/produtoPedido.service";
const produtoPedidoController = Router();

produtoPedidoController.post("/", async (req: Request, res: Response): Promise<Response> => {
    const produtoPedido = req.body;
    const produtoPedidos = await produtoPedidoService.createProdutoPedido(produtoPedido);
    return res.status(200).json(produtoPedidos);
})

produtoPedidoController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const produtoPedidos = await produtoPedidoService.getProdutoPedidos();

    return res.status(200).json(produtoPedidos);
})

produtoPedidoController.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const produtoPedidos = await produtoPedidoService.getProdutoPedidosById(Number(id));

    return res.status(200).json(produtoPedidos);
})

produtoPedidoController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const produtoPedido = req.body;
    const produtoPedidos = await produtoPedidoService.updateProdutoPedido(Number(id), produtoPedido);

    return res.status(200).json(produtoPedidos);
})

produtoPedidoController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await produtoPedidoService.removeProdutoPedido(id);

    return res.status(201).json({message: 'Registro removido com sucesso'});
})


export default produtoPedidoController;