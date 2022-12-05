import { ResultSetHeader } from "mysql2";
import IPedido from "../interfaces/pedido.interface";
import connection from "./connection";

const create = async (pedido: IPedido): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>("INSERT INTO pedidos (data_hora, nome_pessoa, cpf_pessoa, forma_pag, endereco, confirmado, obs, valor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [pedido.data_hora, pedido.nome_pessoa, pedido.cpf_pessoa, pedido.forma_pag, pedido.endereco, pedido.confirmado, pedido.obs, pedido.valor]);

    return result;
}

const getAll = async (): Promise<IPedido[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM pedidos',
    );
    return rows as IPedido[];
}

const getById = async (id: number): Promise<IPedido> => {
    const [rows] = await connection.execute(
        'SELECT * FROM pedidos WHERE id_pedido = ?', [id],
    );
    const [pedido] = rows as IPedido[];
    return pedido as IPedido;
}

const getPedidoNome = async (nome: string): Promise<IPedido> => {
    const [rows] = await connection.execute(
        'SELECT * FROM pedidos WHERE nome_pessoa = ?', [nome],
    );
    const [pedido] = rows as IPedido[];
    return pedido as IPedido;
}
const update = async (id: number, pedido: IPedido): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(
        "UPDATE pedidos SET data_hora=?, nome_pessoa=?, cpf_pessoa=?, forma_pag=?, endereco=?, confirmado=?, obs=?, valor=? WHERE id_pedido=?",
        [pedido.data_hora, pedido.nome_pessoa, pedido.cpf_pessoa, pedido.forma_pag, pedido.endereco, pedido.confirmado, pedido.obs, pedido.valor, id]
    );

    return result;
}

const remove = async (id: number): Promise<void> => {
    await connection.execute(
        "DELETE FROM pedidos WHERE id_pedido=?",
        [id]
    );
}


export default { create, getAll, getById, getPedidoNome, update, remove };