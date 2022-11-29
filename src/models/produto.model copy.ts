import { ResultSetHeader } from "mysql2";
import IProduto from "../interfaces/user.interface";
import connection from "./connection";

const create = async (user: IProduto): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>("INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)",
    [user.name, user.email, user.role, user.password]);

    return result;
}

const getAll = async (): Promise<IProduto[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM users',
    );
    return rows as IProduto[];
}

const getById = async (id: number): Promise<IProduto> => {
    const [rows] = await connection.execute(
        'SELECT * FROM users WHERE id = ?', [id],
    );
    const [user] = rows as IProduto[];
    return user as IProduto;
}

const getUserEmail = async (email: string): Promise<IProduto> => {
    const [rows] = await connection.execute(
        'SELECT * FROM users WHERE email = ?', [email],
    );
    const [user] = rows as IProduto[];
    return user as IProduto;
}

const update = async (id:number, user: IProduto): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>(
        "UPDATE users SET name=?, email=?, role=?, password=? WHERE id=?",
        [user.name, user.email, user.role, user.password, id]
      );
    
      return result;
}

const remove = async (id:number): Promise<void> => {
    await connection.execute(
        "DELETE FROM users WHERE id=?",
        [id]
      );
}


export default { create, getAll, getById, getUserEmail, update, remove };