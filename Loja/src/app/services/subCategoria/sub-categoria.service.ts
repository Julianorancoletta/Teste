import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategoria } from '../../models/category.model';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class SubCategoriaService extends ApiService {

    getProduct(id: string):Observable<SubCategoria[]> {
       return super.getId('SubCategoria',id)
    }

}