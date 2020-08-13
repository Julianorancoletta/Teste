import { CommonModule, registerLocaleData } from '@angular/common'
import { NgModule } from '@angular/core'
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { CarComponent } from './car/car.component'
import { car } from './car/car';
import { RouterModule } from '@angular/router';
import { ToastDeleteComponent } from './toast-delete/toast-delete.component';
import { ToastModule } from 'primeng/toast';
import { ToastComponent } from './toast/toast.component';
import { SearchComponent } from './search/search.component';
import { BiggerSmallerComponent } from './checkbox/bigger-smaller/bigger-smaller.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './loader/loader.services';

@NgModule({
  declarations: [
    CarComponent,
    ToastDeleteComponent,
    ToastComponent,
    SearchComponent,
    BiggerSmallerComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    MatProgressSpinnerModule

  ],
  providers: [
    car,
    LoaderService
  ],
  bootstrap: [],
  exports: [
    BiggerSmallerComponent,
    ToastDeleteComponent,
    CarComponent,
    ToastComponent,
    LoaderComponent
  ],
})
export class ComponentsModule { }
