import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategoria } from '../../models/category.model';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class SubCategoriaService extends ApiService {

    get(id: string):Observable<SubCategoria[]> {
       return super.getId('SubCategoria',id)
    }

}