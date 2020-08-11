import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';





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

    getProduct(id: string) {
        return this.http
            .get(`${this.url}/${id}`, this.ObterHeaderJson());
    }

}