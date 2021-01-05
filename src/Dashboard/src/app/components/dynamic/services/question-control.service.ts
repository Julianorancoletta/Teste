import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../Modal/question-base';


@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};
    questions.forEach(question => {
      group[question.key] = this.questionValidation(question);
    });
    return new FormGroup(group);
  }

  questionValidation(question: any) {
    let validation;
    let types = [];

    if (question.required) types.push(Validators.required);
    if (question.maxlength && question.maxlength > 0) types.push(Validators.maxLength(question.maxlength));
    if (question.minlength && question.minlength > 0) types.push(Validators.minLength(question.minlength));
    
    validation = types ?
      new FormControl(question.value || '', types) :
      new FormControl(question.value || '')

    return validation;
  }
}
