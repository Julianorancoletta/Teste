import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment'
import { ProductModel } from 'src/app/core/models/product.model';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/core/models/photo';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  protected readonly url = `${environment.api}/product`;
  protected readonly img = `${environment.api}/Imagem/upload`;



  constructor(private http: HttpClient) {
  }

  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(this.url, this.ObterHeaderJson());
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http
      .get<ProductModel>(`${this.url}/${id}`, this.ObterHeaderJson());
  }

  post(product: ProductModel) {
    return this.http
      .post(this.url, product, this.ObterHeaderJson());
  }

  postImg(photo:Photo){
    const formData = new FormData();
    formData.append('ProductId', photo.ProductId.toString());
    formData.append('file', photo.file);
 
    return this.http.post(`${this.img}`, formData)
    
  }
}