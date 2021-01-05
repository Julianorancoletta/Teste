import { Component } from '@angular/core';
import { DropdownQuestion } from '../../../components/dynamic/class/question-dropdown';
import { TextboxQuestion } from '../../../components/dynamic/class/question-textbox';
import { QuestionBase } from '../../../components/dynamic/Modal/question-base';


@Component({
  template: ` 
  <div class="panel-header panel-header-sm">
  </div>
  <div class="main-content">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="title">Cadastro de Contatos</h5>
            </div>
              <div class="card-body all-icons">
                teste
                <app-form [questions]="questions" [Messages]="Messages" (resposta)="getResposta($event)"></app-form>
              </div>
          </div>
        </div>
      </div>
  </div>
  `,
})
export class CateforyComponent {

  questions: any[];
  Messages: any = {};

  constructor() { }

  ngOnInit(): void {

    this.Messages = {
      nome: {
        required: 'Escolha um fornecedor',
      },
      sobrenome: {
        required: 'Informe o Nome'
      },
      emailAddress: {
        required: 'Informe a Descrição',
      },
      instagram: {
        required: 'Informe a Imagem',
      },
      senha: {
        required: 'Informe o Valor',
      }
    }

  }


  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'nome',
        label: 'Nome',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'sobrenome',
        label: 'Sobrenome',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        email: true,
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'instagram',
        label: 'Instagram',
        required: true,
        order: 4
      }),

      new TextboxQuestion({
        key: 'senha',
        label: 'Senha',
        type: 'password',
        required: true,
        maxlength: 10,
        minlength: 3,
        order: 5
      }),

      new DropdownQuestion({
        key: 'tipo',
        label: 'Tipo de Contato',
        options: [
          { key: '01', value: 'Cliente' },
          { key: '02', value: 'Fornecedor' },
          { key: '03', value: 'Família' },
          { key: '04', value: 'Amigo' }
        ],
        order: 6
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getResposta(event) {
    console.log(JSON.stringify(event))
  }

}

