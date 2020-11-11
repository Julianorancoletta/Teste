import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment'
import { ProductModel, Photo, listProduct } from '../../models/product.model';
import { Observable } from 'rxjs';
import { busca } from '../../models/busca.model';
import { ApiService } from '../api.service';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends ApiService{


 
  product
  getProducts(Busca:busca): Observable<listProduct> {

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

  // post(product: ProductModel) {
  //   return this.http
  //     .post(this.url, product, this.ObterHeaderJson());
  // }

  // delete(id: number) {
  //   return this.http
  //     .delete(`${this.url}/${id}`,this.ObterHeaderJson());
  // }
  // postImg(photo: Photo) {
  //   const formData = new FormData();
  //   formData.append('ProductId', photo.ProductId.toString());
  //   formData.append('file', photo.file);

  //   return this.http.post(`${this.url}/upload`, formData)
  // }

  // atualizarProduto(roduct: ProductModel): Observable<ProductModel> {
  //   return this.http
  //     .put<ProductModel>(`${this.url}/${roduct.id}`, roduct, this.ObterHeaderJson());
  // }

  getbusca(Busca:busca): Observable<string[]> {
    const params = new HttpParams()
    .set('ItemBuscado', Busca.ItemBuscado);
    return super.getParams('product/busca',params)
  }
}