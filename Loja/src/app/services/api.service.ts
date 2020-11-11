import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { throwError, Observable } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {

  constructor(
    private http: HttpClient,
    public router: Router) { }

  private formatErrors(error: any) {
    return throwError(error.error)
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    }),
  }

  get(path: string): Observable<any> {
    return this.http
      .get(`${environment.api}${path}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  getParams(path: string,param: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.api}${path}?${param}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  getId(path: string,id:any): Observable<any> {
    return this.http
      .get(`${environment.api}${path}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  post(path: string, body: any): Observable<any> {
    return this.http
      .post(`${environment.api}${path}`, JSON.stringify(body), this.httpOptions)
      .pipe(catchError(this.formatErrors))
  }

  put(path: string, id: any, body: any): Observable<any> {
    return this.http
      .put(`${environment.api}${path}/${id}`, JSON.stringify(body), this.httpOptions)
      .pipe(catchError(this.formatErrors))
  }

  delete(path: string, id: any): Observable<any> {
    return this.http
      .delete(`${environment.api}${path}/${id}`, this.httpOptions)
      .pipe(catchError(this.formatErrors))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
