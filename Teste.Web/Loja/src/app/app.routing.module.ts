import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';



const routes: Routes = [

    { path: '', component: ProdutosComponent, pathMatch: 'full' }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

