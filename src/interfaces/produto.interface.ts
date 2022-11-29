export default interface IProduto {
    id_produto?: number;
    nome: string;
    valor: number;
    qtd_estoque: number;
    img: string;
    ativo: boolean;
}