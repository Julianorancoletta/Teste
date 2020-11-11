import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductModel, listProduct} from '../../models/product.model';
import { busca } from '../../models/busca.model';
import { ProdutosService } from './produtos.service';

@Injectable()
export class ProdutoResolve implements Resolve<listProduct> {
    Busca:busca 
    constructor(private produtoService: ProdutosService) { }

    resolve(route: ActivatedRouteSnapshot) {
        this.Busca = new busca
        this.Busca.ItemBuscado = route.params['id'] ? route.params['id'] : " ";
        this.Busca.categoria = route.params['categoria'] ? route.params['categoria'] :" " 
        this.Busca.subCategoria = route.params['subCategoria'] ? route.params['subCategoria'] :" "
        return this.produtoService.getProducts(this.Busca);
    }
}