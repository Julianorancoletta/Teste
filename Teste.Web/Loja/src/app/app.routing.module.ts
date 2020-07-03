import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './pages/client/produtos/produtos.component';
import { DetalhesProdutoComponent } from './pages/client/produtos/detalhes-produto/detalhes-produto.component';

const routes: Routes = [
    { path: '', component: ProdutosComponent, pathMatch: 'full' },
    { path: 'produto-detalhes/:id', component: DetalhesProdutoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

