import { ProductModel, listProduct } from '../../core/models/product.model';
import { busca } from '../../core/models/busca.model';
export abstract class searchComponent  {

    produtos: ProductModel[];
    paginaAtual: number;
    list: boolean = false;
    listaProduto: listProduct;
    Busca: busca;

    onInit(params){
        this.paginaAtual = 1;
        this.Busca = new busca
        this.produtos = this.listaProduto.product;
        this.Busca.ItemBuscado = params.id ? params.id : " ";
        this.Busca.subCategoria = params.subCategoria ? params.subCategoria : " ";
        this.Busca.categoria = params.categoria ? params.categoria : " "
    }


}