import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductModel} from '../../../app/core/models/product.model';
import { busca } from '../../../app/core/models/busca.model';
import { ProdutosService } from './produtos.service';

@Injectable()
export class ProdutoResolve implements Resolve<ProductModel[]> {
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