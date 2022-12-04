import { Router } from "express";
import produtoController from "./controllers/produto.controller";
import produtoPedidoController from "./controllers/produtoPedido.controller";
import pedidosController from "./controllers/pedidos.controller";

const routers = Router();

routers.use("/produto", produtoController);
routers.use("/pedido", pedidosController);
routers.use("/pedidoProdutos", produtoPedidoController);

export default routers;