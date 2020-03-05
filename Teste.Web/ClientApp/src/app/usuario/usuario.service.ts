import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  deleteUsuario(id: Number) {
    return this.Http.delete(`${this.urlService}/${id}`)
  }

  atualizaUsuario(usuario: Usuario) {
    const params = new HttpParams()
      .set('nome', usuario.nome)
      .set('sobrenome', usuario.sobrenome)
      .set('email', usuario.email)
      .set('dataNascimento', usuario.dataNascimento.toString())
      .set('idEscolaridade', usuario.idEscolaridade.toString())

    this.Http.put<Usuario>(`${this.urlService}/${usuario.id}?${params}`, "")
    console.log(`${this.urlService}/${usuario.id}?${params}`)
  }


  AdicionaUsuario(usuario: Usuario) {

    const params = new HttpParams()
      .set('nome', usuario.nome)
      .set('sobrenome', usuario.sobrenome)
      .set('email', usuario.email)
      .set('dataNascimento', usuario.dataNascimento.toString())
      .set('idEscolaridade', usuario.idEscolaridade.toString())

    this.Http.post<Usuario>(`${this.urlService}?${params}`, "")
  }


  buscaUsuario(id: number): Observable<Usuario> {
    return this.Http.get<Usuario>(`${this.urlService}/${id}`)
  }

 
}
