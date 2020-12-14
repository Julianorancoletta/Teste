
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { FormBaseComponent } from '../form/form-base.component';
export abstract class FormsBaseComponent extends FormBaseComponent {

    messagens:string[] =[]
    errors: any[] = [];
    Form: FormGroup;

    constructor(){
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


    protected configuraMessagensDescription():Promise<any[]> {
        return new Promise((resolve) => {

            this.messagens.forEach(element=>{

            })
        })
    }

    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
        super.configurarValidacaoFormularioBase(formInputElements, this.Form);
    }
}