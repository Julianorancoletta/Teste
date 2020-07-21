import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-delete',
  templateUrl: './toast-delete.component.html',
  styleUrls: ['./toast-delete.component.css'],
  providers: [MessageService]
})
export class ToastDeleteComponent {

  constructor(private messageService: MessageService) { }

  @Input() set messagem(msg: string) {
    console.log(msg)
    this.refreshRepos(msg);
  }

  @Output() resposta = new EventEmitter<boolean>();

  refreshRepos(msg: string) {
    
    if (msg) {
      this.messageService.add({ severity: 'warn', summary: 'Info Message', detail: msg });
    }
  }

  onConfirm() {
    this.messageService.clear();
    this.resposta.emit(true);
  }
  onReject() {
    this.messageService.clear();
    this.resposta.emit(false);
  }


}
