import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from './component/components.module';

import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { NavMenuComponent } from './navigation/nav-menu/nav-menu.component';
import { WithProgressBarService } from './with-progress-bar.service';
import { headerComponent } from './navigation/header/header.component';
import {CardModule} from 'primeng/card';
import { HomeComponent } from './pages/user/home/home.component';
import { ProdutosModule } from './pages/admin/produtos/produtos.module';
  
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    headerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    ProdutosModule,
    FormsModule,
    AutoCompleteModule,
    DropdownModule,
    CardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithProgressBarService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }