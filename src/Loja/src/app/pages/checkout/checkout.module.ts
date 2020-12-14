import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutesModule } from './checkout.routes';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  exports:[],
  imports: [
    CommonModule,
    CheckoutRoutesModule
  ]
})
export class checkoutModule { }
