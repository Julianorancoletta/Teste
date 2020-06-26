import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/models/product.model';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  protected readonly url = `${environment.api}/product`;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductModel[]>(this.url);
  }

  getProduct(id) {
    return this.http.get<ProductModel>(`${this.url}?${id}`,{});
  }
}