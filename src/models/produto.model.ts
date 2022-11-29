import { ResultSetHeader } from "mysql2";
import IProduto from "../interfaces/produto.interface";
import connection from "./connection";

const create = async (produto: IProduto): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>("INSERT INTO produtos (nome, valor, qtd_estoque, img, ativo) VALUES (?, ?, ?, ?, ?)",
    [produto.nome, produto.valor, produto.qtd_estoque, produto.img, produto.ativo]);

    return result;
}

const getAll = async (): Promise<IProduto[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM produtos',
    );
    return rows as IProduto[];
}

const getById = async (id: number): Promise<IProduto> => {
    const [rows] = await connection.execute(
        'SELECT * FROM produtos WHERE id = ?', [id],
    );
    const [produto] = rows as IProduto[];
    return produto as IProduto;
}

const getProdutoValor = async (valor: string): Promise<IProduto> => {
    const [rows] = await connection.execute(
        'SELECT * FROM produtos WHERE valor = ?', [valor],
    );
    const [produto] = rows as IProduto[];
    return produto as IProduto;
}

const update = async (id:number, produto: IProduto): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>(
        "UPDATE produtos SET nome=?, valor=?, qtd_estoque=?, ativo=?, img=? WHERE id_produto=?",
        [produto.nome, produto.valor, produto.qtd_estoque, produto.ativo, produto.img, id]
      );
    
      return result;
}

const remove = async (id:number): Promise<void> => {
    await connection.execute(
        "DELETE FROM produtos WHERE id_produto=?",
        [id]
      );
}


export default { create, getAll, getById, getProdutoValor, update, remove };