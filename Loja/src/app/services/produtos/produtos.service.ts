import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ProductModel, Photo, listProduct } from '../../models/product.model';
import { Observable } from 'rxjs';
import { busca } from '../../models/busca.model';
import { ApiService } from '../api.service';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends ApiService{

  getProducts(Busca:busca= null): Observable<listProduct> {

    const params = new HttpParams()
    .set('ItemBuscado', Busca.ItemBuscado)
    .set('order', Busca.order.toString())
    .set('categoria', Busca.categoria)
    .set('subCategoria',Busca.subCategoria)
    .set('numeroPagina', Busca.numeroPagina.toString())
    .set('itensPorPagina',Busca.itensPorPagina.toString())

    return super.getParams('product',params)
  }

  getProduct(id: string): Observable<ProductModel> {
    return super.getId('product',id);
  }

  postProduto (product: ProductModel) {
   return super.post('product',product);
  }

  deleteProduto(id: number) {
    return super.delete('product',id)
  }

  postImg(photo: Photo) {
    const formData = new FormData();
    formData.append('ProductId', photo.ProductId.toString());
    formData.append('file', photo.file);

    return super.post('product/upload',formData)
  }

  atualizarProduto(product: ProductModel): Observable<ProductModel> {
   return super.put('product',product.id,product)
  }

  getbusca(Busca:busca): Observable<string[]> {
    const params = new HttpParams()
    .set('ItemBuscado', Busca.ItemBuscado);
    return super.getParams('product/busca',params)
  }
}