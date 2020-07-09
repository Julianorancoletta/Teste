import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutosComponent } from "./produtos.component";
import { DetalhesProdutoComponent } from "./detalhes-produto/detalhes-produto.component";
import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";

const routes: Routes = [

    { path: '', component: ProdutosComponent},
    { path: 'produto-detalhes/:id', component: DetalhesProdutoComponent },
    { path: 'produto-Cadastro', component: CadastroProdutoComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ProdutoRoutesModule { }