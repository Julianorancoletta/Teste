import { Injectable } from '@angular/core';
import { Login } from '../models/usuario/login';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment'
import * as CryptoJS from 'crypto-js';
import * as Cookies  from 'js-cookie'
import { Usuario } from '../models/usuario/usuario';
@Injectable({
  providedIn: 'root',
})
export class LoginService extends ApiService {

  // Criar um usuario
  login(login: Login): Observable<Login> {
    return this.post('Usuario/login', login)
  }

  loggedIn() {
    return !!Cookies.get('token');
  }

  logout() {
    Cookies.remove('token');
    Cookies.remove('login');
    this.router.navigate(['/login']);
  }

  getToken() {
    return Cookies.get('token');
  }

  getEmail() {
    if (Cookies.get('login')){
      const storage = CryptoJS.AES.decrypt(
        Cookies.get('login'), environment.key
      );
      const usuario:Usuario = JSON.parse(storage.toString(CryptoJS.enc.Utf8));
      return usuario;
    }
  }

  setEmail(usuario: object) {
    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(usuario), environment.key);
    Cookies.set('login', encrypted.toString(),{expires: 0.1, sameSite: 'Lax'});
  }

  setToken(token: string): void {
    Cookies.set('token', token,{expires: 0.1, sameSite: 'Lax'});
  }

  setkey(chave:string){
    localStorage.setItem('chave',chave)
  }

}






