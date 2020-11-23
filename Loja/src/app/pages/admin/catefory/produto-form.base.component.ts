
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { FormBaseComponent } from '../../../component/form/form-base.component';
import { Category } from '../../../models/category.model';
import { Photo } from '../../../models/product.model';



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