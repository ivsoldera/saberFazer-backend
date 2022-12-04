import { ResultSetHeader } from "mysql2";
import IProdutoPedido from "../interfaces/produtoPedido.interface";
import connection from "./connection";

const create = async (produtoPedido: IProdutoPedido): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>("INSERT INTO prod_ped (id_produto, id_pedido, quantidade, status) VALUES (?, ?, ?, ?)",
    [produtoPedido.id_produto, produtoPedido.id_pedido, produtoPedido.quantidade, produtoPedido.status]);

    return result;
}

const getAll = async (): Promise<IProdutoPedido[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM prod_ped',
    );
    return rows as IProdutoPedido[];
}

const getById = async (id: number): Promise<IProdutoPedido> => {
    const [rows] = await connection.execute(
        'SELECT * FROM prod_ped WHERE id_prod_ped = ?', [id],
    );
    const [produtoPedido] = rows as IProdutoPedido[];
    return produtoPedido as IProdutoPedido;
}

const update = async (id:number, produtoPedido: IProdutoPedido): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>(
        "UPDATE prod_ped SET id_produto=?, id_pedido=?, quantidade=?, status=? WHERE id_prod_ped=?",
        [produtoPedido.id_produto, produtoPedido.id_pedido, produtoPedido.quantidade, produtoPedido.status, id]
      );
    
      return result;
}

const remove = async (id:number): Promise<void> => {
    await connection.execute(
        "DELETE FROM prod_ped WHERE id_prod_ped=?",
        [id]
      );
}


export default { create, getAll, getById, update, remove };