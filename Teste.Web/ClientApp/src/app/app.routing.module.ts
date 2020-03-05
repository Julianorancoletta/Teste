import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { AdicionaUsuarioComponent } from './usuario/adiciona-edita-usuario/adiciona-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';



const routes: Routes = [

    { path: '', component: UsuarioComponent, pathMatch: 'full' },
    { path: 'escolaridade', component: EscolaridadeComponent },
    { path: 'Adicionar',  component: AdicionaUsuarioComponent},
    { path:'Editar/:id',component:EditarUsuarioComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

