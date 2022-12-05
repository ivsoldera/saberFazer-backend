import { Router } from "express";
import produtoController from "./controllers/produto.controller";
import produtoPedidoController from "./controllers/produtoPedido.controller";
import pedidosController from "./controllers/pedidos.controller";
import authController from "./controllers/auth.controller";

const routers = Router();

routers.use("/produto", produtoController);
routers.use("/pedido", pedidosController);
routers.use("/pedidoProdutos", produtoPedidoController);
routers.use("/auth", authController);

export default routers;