import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment'
import { ProductModel } from './catefory/node_modules/src/app/core/models/product.model';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class categoryService {
  protected readonly url = `${environment.api}/Category`;

  constructor(private http: HttpClient) {
  }

  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getcategory(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.url, this.ObterHeaderJson());
  }
}