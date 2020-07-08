import { CommonModule ,registerLocaleData} from '@angular/common'
import { NgModule } from '@angular/core'
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

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
