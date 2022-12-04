import IProdutoPedido from "../interfaces/produtoPedido.interface";
import produtoPedidoModel from "../models/produtoPedido.model";
import HttpException from "../utils/httpException";


const createProdutoPedido = async ( produtoPedido: IProdutoPedido ): Promise<IProdutoPedido> => {
    const { insertId } = await produtoPedidoModel.create(produtoPedido);
    produtoPedido.id_prod_ped = insertId;
    return produtoPedido;
}

const getProdutoPedidos = (): Promise<IProdutoPedido[]> => {
    return produtoPedidoModel.getAll();
}

const getProdutoPedidosById = async (id: number): Promise<IProdutoPedido> => {
    const produtoPedido = await produtoPedidoModel.getById(id);
    if(!produtoPedido) throw new HttpException(404, 'Usuário não existe!');
   
    return produtoPedido;
}

const updateProdutoPedido = async (id:number, produtoPedido: IProdutoPedido): Promise<IProdutoPedido> => {
    const teste = await produtoPedidoModel.update(id, produtoPedido);
    produtoPedido.id_prod_ped = id;

    return produtoPedido
}

const removeProdutoPedido = async (id:number): Promise<void> => {
    await produtoPedidoModel.remove(id);
}

export default { createProdutoPedido, getProdutoPedidos, getProdutoPedidosById, updateProdutoPedido, removeProdutoPedido };