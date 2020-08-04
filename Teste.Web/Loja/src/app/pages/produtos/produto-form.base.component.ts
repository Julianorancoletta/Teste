
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { FormBaseComponent } from 'src/app/component/form/form-base.component';
import { ProductModel, Photo } from 'src/app/core/models/product.model';
import { Category } from 'src/app/core/models/category.model';

export abstract class ProdutoBaseComponent extends FormBaseComponent {

    produto: ProductModel;
    category: Category[];
    photo:Photo;
    errors: any[] = [];
    produtoForm: FormGroup;

    constructor() {
        super();

        this.validationMessages = {
            categoryId: {
                required: 'Escolha um categoria',
            },
            title: {
                required: 'Informe o Titulo',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 200 caracteres'
            },
            shortDescription: {
                required: 'Informe a descrição',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 1000 caracteres'
            },
            imagem: {
                required: 'Informe a Imagem',
            },
            brand: {
                required: 'Informe a marca',
            },
            salePrice: {
                required: 'Informe o valor',
            },
            price: {
                required: 'Informe o valor',
            }
        }

        super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
        super.configurarValidacaoFormularioBase(formInputElements, this.produtoForm);
    }
}