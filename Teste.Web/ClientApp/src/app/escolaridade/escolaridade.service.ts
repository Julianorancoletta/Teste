import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escolaridade } from './escolaridade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {

  constructor(private http: HttpClient) { }

  protected UrlService: string = 'api/Escolaridade'

  getEscolaridade(): Observable<Escolaridade[]> {
    return this.http.
      get<Escolaridade[]>(this.UrlService)
  }
}
