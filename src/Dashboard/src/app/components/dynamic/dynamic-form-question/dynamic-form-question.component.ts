import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../Modal/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() messagem: any;

  get isValid() { return this.form.controls[this.question.key].valid; }

  MessagemDeErro(isValid) {
    if (!isValid) {
      let valid: string[] = Object.keys(this.form.controls[this.question.key].errors).filter(x => { return x })
      return this.messagem[this.question.key][valid[0]]
    };
  }
}

