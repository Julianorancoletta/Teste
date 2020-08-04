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

@NgModule({
  declarations: [
    CarComponent,
    ToastDeleteComponent,
    ToastComponent,
    SearchComponent,
    BiggerSmallerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
  ],
  providers: [car],
  bootstrap: [],
  exports: [
    BiggerSmallerComponent,
    ToastDeleteComponent,
    CarComponent,
    ToastComponent
  ],
})
export class ComponentsModule { }
