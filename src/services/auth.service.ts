import { hash, compare } from 'bcrypt';
import IUser, {IUserAuth} from "../interfaces/user.interface";
import userModel from "../models/user.model";
import HttpException from "../utils/httpException";
import Token from "../utils/token";

const auth = async ( loginData: IUserAuth ): Promise<string> => {
    const { email, password } = loginData;

    if(!email || !password) throw new HttpException(401, "Dados faltando!");

    const user = await userModel.getUserEmail(email);
    if(!user) throw new HttpException(404, 'Usuário não existe!');

    const validatePassword = await compare(password, user.password);
    console.log(validatePassword)
    if(!validatePassword) {
        throw new HttpException(401, "E-mail ou Senha inválidos!");
    }

    const payload = {
        name: user.name,
        email: user.email,
        role: user.role
    }

    const tokenGenerator = new Token();
    const token = tokenGenerator.JwtGenerator(payload);
    return token;
}


export default { auth };