import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private Http: HttpClient) {
  }

  protected urlService: string = "api/Usuario"

  getUsuario(): Observable<Usuario[]> {
    return this.Http.get<Usuario[]>(this.urlService)
  }

}
