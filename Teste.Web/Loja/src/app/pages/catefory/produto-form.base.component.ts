
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { Category } from '../../core/models/category.model';
import { Photo } from '../../core/models/product.model';
import { FormBaseComponent } from '../../component/form/form-base.component';


export abstract class CateforyBaseComponent extends FormBaseComponent {

    category: Category;
    photo: Photo;
    errors: any[] = [];
    produtoForm: FormGroup;

    constructor() {
        super();

        this.validationMessages = {
            description: {
                required: 'Informe o nome da categoria',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 30 caracteres'
            }
        }
        super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
        super.configurarValidacaoFormularioBase(formInputElements, this.produtoForm);
    }
}