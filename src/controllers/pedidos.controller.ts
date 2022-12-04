import { Request, Response, Router } from "express";
import pedidoService from "../services/pedido.service";
const pedidoController = Router();

pedidoController.post("/", async (req: Request, res: Response): Promise<Response> => {
    const pedido = req.body;
    const pedidos = await pedidoService.createPedido(pedido);
    return res.status(200).json(pedidos);
})

pedidoController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const pedidos = await pedidoService.getPedidos();

    return res.status(200).json(pedidos);
})

pedidoController.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const pedidos = await pedidoService.getPedidosById(Number(id));

    return res.status(200).json(pedidos);
})

pedidoController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const pedido = req.body;
    const pedidos = await pedidoService.updatePedido(Number(id), pedido);

    return res.status(200).json(pedidos);
})

pedidoController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await pedidoService.removePedido(id);

    return res.status(201).json({message: 'Registro removido com sucesso'});
})


export default pedidoController;