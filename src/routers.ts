import { Router } from "express";
import userController from "./controllers/produtoPedido.controller";

const routers = Router();

routers.use("/users", userController);

export default routers;