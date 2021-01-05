import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './Modal/question-base';
import { QuestionControlService } from './services/question-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() Messages = {}
  @Output() resposta = new EventEmitter<any>();
  form: FormGroup;
  constructor(private qcs: QuestionControlService) {

  }

  ngOnInit() {
    debugger
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.resposta.emit(this.form.value);
    this.form.reset();
  }
}
