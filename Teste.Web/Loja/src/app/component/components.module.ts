import { CommonModule ,registerLocaleData} from '@angular/common'
import { NgModule } from '@angular/core'
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { CarComponent } from './car/car.component'
import { car } from './car/car';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [car],
  bootstrap: [],
  exports: [CarComponent],
})
export class ComponentsModule {}
