import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment'
import { ProductModel, Photo } from 'src/app/core/models/product.model';
import { Observable } from 'rxjs';

import { busca } from 'src/app/core/models/busca.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  protected readonly url = `${environment.api}/product`;
  protected readonly img = `${environment.api}/product/upload`;

  constructor(private http: HttpClient) {
  }

  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getProducts(Busca:busca): Observable<ProductModel[]> {
    const params = new HttpParams()
    .set('ItemBuscado', Busca.ItemBuscado)
    .set('order', Busca.order.toString())
    .set('categoria', Busca.categoria.toString())
    return this.http
      .get<ProductModel[]>(`${this.url}?${params}`, this.ObterHeaderJson());
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

    return this.http.post(`${this.img}`, formData)
  }

  atualizarProduto(roduct: ProductModel): Observable<ProductModel> {
    return this.http
      .put<ProductModel>(`${this.url}/${roduct.id}`, roduct, this.ObterHeaderJson());
  }
}