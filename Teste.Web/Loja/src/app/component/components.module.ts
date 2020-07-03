import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'


import { CarComponent } from './car/car.component'
import { car } from './car/car';

@NgModule({
  declarations: [CarComponent],
  imports: [CommonModule],
  providers: [car],
  bootstrap: [],
  exports: [CarComponent],
})
export class ComponentsModule {}
