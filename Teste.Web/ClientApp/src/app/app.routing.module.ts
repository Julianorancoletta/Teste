import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';



const routes: Routes = [

    { path: '', component: UsuarioComponent, pathMatch: 'full' },
    { path: 'escolaridade', component: EscolaridadeComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

