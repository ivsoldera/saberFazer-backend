import IProduto from "../interfaces/produto.interface";
import produtoModel from "../models/produto.model";
import HttpException from "../utils/httpException";

const createProduto = async ( produto: IProduto ): Promise<IProduto> => {
    const { insertId } = await produtoModel.create(produto);
    produto.id_produto = insertId;
    return produto;
}

const getProdutos = (): Promise<IProduto[]> => {
    return produtoModel.getAll();
}

const getProdutosById = async (id: number): Promise<IProduto> => {
    const produto = await produtoModel.getById(id);
    if(!produto) throw new HttpException(404, 'Usuário não existe!');
   
    return produto;
}

const updateProduto = async (id:number, produto: IProduto): Promise<IProduto> => {
    const teste = await produtoModel.update(id, produto);
    produto.id_produto = id;

    return produto
}

const removeProduto = async (id:number): Promise<void> => {
    await produtoModel.remove(id);
}

export default { createProduto, getProdutos, getProdutosById, updateProduto, removeProduto };