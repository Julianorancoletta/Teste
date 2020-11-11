import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { tiposDeAlert } from 'src/app/enumerable/tipos_de_alert.enum';

@Component({
  selector: 'app-toast',
  template: '<p-toast [position]="position"></p-toast>',
  providers: [MessageService]
})
export class ToastComponent {

  constructor(private messageService: MessageService) { }
  Alert = tiposDeAlert

  @Input() messagem :number
  @Input() position: string;
  @Input() set tipo (tipos: number){
    this.refreshRepos(tipos);
  }
  @Output() open  = new EventEmitter<boolean>();

  refreshRepos(tipo: number) {
    if (tipo) {
      this.messageService.add({ severity: this.Alert[tipo], 
        summary: `${this.Alert[tipo]} Message`, detail: `${this.messagem}` });
    }
    this.open.emit(true)
  }



}
