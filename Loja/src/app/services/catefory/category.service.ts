import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { ApiService } from '../api.service';
@Injectable({
  providedIn: 'root'
})
export class categoryService extends ApiService{
 
  getcategory(): Observable<Category[]> {
    return super.get('Category');
  }

  getsubcategory(id:any) {
    return super.getId('SubCategoria',id)
  }
}


