import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './loader.services';

@Component({
  selector: 'app-loader',
  template: `
    <div *ngIf="isLoading | async" class="overlay">
      <mat-progress-spinner class="spinner" [color]="color" [mode]="mode" [value]="value"></mat-progress-spinner>
    </div>
  `,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService) { }

}