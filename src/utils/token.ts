import jwt, { SignOptions } from 'jsonwebtoken';
import ITokenData from "../interfaces/token.interface";
import HttpException from './httpException';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.TOKEN_SECRET as string;

const jwtDefaultConfig: SignOptions = {
    expiresIn: "15m",
    algorithm: "HS256"
};

class Token {
    constructor(private jwtConfig?: SignOptions) {
        if(!jwtConfig){
            jwtConfig = jwtDefaultConfig;
        }
    }

    public JwtGenerator (payload: ITokenData) {
        return jwt.sign(payload, SECRET, this.jwtConfig);
    }

    public async authenticateToken (token: string) {
        if(!token){
            throw new HttpException(401, "Sem Token");
        }
        try {
            const validateJwt = jwt.verify(token, SECRET, this.jwtConfig);
            console.log(validateJwt);
            
            return validateJwt;
        } catch (error){
            throw new HttpException(401, "Token Inválido");
        }
    }
}

export default Token;
