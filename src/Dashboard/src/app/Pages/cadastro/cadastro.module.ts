import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { CateforyComponent } from "./catefory/catefory.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    CateforyComponent    
  ],
  providers: [],
  bootstrap: []
})
export class CadastroModule { }