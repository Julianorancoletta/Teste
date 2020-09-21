import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { SubCategoria } from '../../core/models/category.model';

@Injectable({
    providedIn: 'root'
})
export class SubCategoriaService {
    protected readonly url = `${environment.api}/SubCategoria`;  

    constructor(private http: HttpClient) {
    }

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    getProduct(id: string):Observable<SubCategoria[]> {
        return this.http
            .get<SubCategoria[]>(`${this.url}/${id}`, this.ObterHeaderJson());
    }

}