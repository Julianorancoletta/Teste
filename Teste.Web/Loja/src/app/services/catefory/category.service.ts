import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Category } from '../../../app/core/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class categoryService {
  protected readonly url = `${environment.api}/Category`;
  protected readonly urlsub = `${environment.api}/SubCategoria`;

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

  getsubcategory(id:Number) {
    return this.http
      .get(`${this.urlsub}/${id}`, this.ObterHeaderJson());
  }
}