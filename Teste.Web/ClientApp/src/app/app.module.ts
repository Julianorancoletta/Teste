import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutingModule } from './app.routing.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EscolaridadeModule } from './escolaridade/escolaridade.module';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AppRoutingModule,
    UsuarioModule,
    EscolaridadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
