export default interface IPedido {
  id_pedido?: number;
  data_hora: Date;
  nome_pessoa: string;
  cpf_pessoa: string;
  forma_pag: string;
  endereco: string;
  confirmado: boolean;
  obs: string;
  valor: number;
}