import { ProductModel, listProduct } from '../../models/product.model';
import { busca } from '../../models/busca.model';
export abstract class searchComponent  {

    produtos: ProductModel[];
    paginaAtual: number;
    list: boolean = false;
    listaProduto: listProduct;
    Busca: busca = new busca;


    onInit(params){
        this.paginaAtual = 1;
        this.Busca = new busca
        this.produtos = this.listaProduto.product;
        this.Busca.ItemBuscado = params.id ? params.id : " ";
        this.Busca.subCategoria = params.subCategoria ? params.subCategoria : " ";
        this.Busca.categoria = params.categoria ? params.categoria : " "
    }

}