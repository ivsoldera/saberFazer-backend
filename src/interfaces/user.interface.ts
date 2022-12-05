export default interface IUser {
    id?: number;
    name: string;
    email: string;
    role: string;
    password: string;
}

interface IUserAuth {
    email: string;
    password: string;
}

export { IUserAuth };