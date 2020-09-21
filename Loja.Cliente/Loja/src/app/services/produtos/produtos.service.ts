import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment'
import { ProductModel, Photo, listProduct } from '../../../app/core/models/product.model';
import { Observable } from 'rxjs';
import { busca } from '../../../app/core/models/busca.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  protected readonly url = `${environment.api}/product`;

  constructor(private http: HttpClient) {
  }

  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getProducts(Busca:busca): Observable<listProduct> {
    const params = new HttpParams()
    .set('ItemBuscado', Busca.ItemBuscado)
    .set('order', Busca.order.toString())
    .set('categoria', Busca.categoria)
    .set('subCategoria',Busca.subCategoria)
    .set('numeroPagina', Busca.numeroPagina.toString())
    .set('itensPorPagina',Busca.itensPorPagina.toString())
    return this.http
      .get<listProduct>(`${this.url}?${params}`, this.ObterHeaderJson());
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http
      .get<ProductModel>(`${this.url}/${id}`, this.ObterHeaderJson());
  }

  post(product: ProductModel) {
    return this.http
      .post(this.url, product, this.ObterHeaderJson());
  }

  delete(id: number) {
    return this.http
      .delete(`${this.url}/${id}`,this.ObterHeaderJson());
  }
  postImg(photo: Photo) {
    const formData = new FormData();
    formData.append('ProductId', photo.ProductId.toString());
    formData.append('file', photo.file);

    return this.http.post(`${this.url}/upload`, formData)
  }

  atualizarProduto(roduct: ProductModel): Observable<ProductModel> {
    return this.http
      .put<ProductModel>(`${this.url}/${roduct.id}`, roduct, this.ObterHeaderJson());
  }

  getbusca(Busca:busca): Observable<string[]> {
    const params = new HttpParams()
    .set('ItemBuscado', Busca.ItemBuscado);
    return this.http
      .get<string[]>(`${this.url}/busca?${params}`, this.ObterHeaderJson());
  }
}