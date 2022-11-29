import { hash, compare } from 'bcrypt';
import IPedido from "../interfaces/pedido.interface";
import pedidoModel from "../models/pedido.model";
import HttpException from "../utils/httpException";

const createPedido = async ( pedido: IPedido ): Promise<IPedido> => {
    const { insertId } = await pedidoModel.create(pedido);
    pedido.id_pedido = insertId;
    return pedido;
}

const getPedidos = (): Promise<IPedido[]> => {
    return pedidoModel.getAll();
}

const getPedidosById = async (id: number): Promise<IPedido> => {
    const pedido = await pedidoModel.getById(id);
    if(!pedido) throw new HttpException(404, 'Usuário não existe!');
   
    return pedido;
}

const updatePedido = async (id:number, pedido: IPedido): Promise<IPedido> => {
    const teste = await pedidoModel.update(id, pedido);
    pedido.id_pedido = id;

    return pedido
}

const removePedido = async (id:number): Promise<void> => {
    await pedidoModel.remove(id);
}

export default { createPedido, getPedidos, getPedidosById, updatePedido, removePedido };