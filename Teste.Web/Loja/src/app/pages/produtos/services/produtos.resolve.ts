import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductModel} from 'src/app/core/models/product.model';
import { ProdutosService } from '../services/produtos.service';
import { busca } from 'src/app/core/models/busca.model';

@Injectable()
export class ProdutoResolve implements Resolve<ProductModel[]> {
    Busca:busca 
    constructor(private produtoService: ProdutosService) { }

    resolve(route: ActivatedRouteSnapshot) {
        this.Busca = new busca
        this.Busca.ItemBuscado = route.params['id'] ? route.params['id'] : " ";
        this.Busca.categoria = route.params['categoria'] ? route.params['categoria'] :" " 
        return this.produtoService.getProducts(this.Busca);
    }
}