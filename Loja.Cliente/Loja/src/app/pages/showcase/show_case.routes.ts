import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowCaseComponent } from "./show_case.component";
import { DetalhesProdutoComponent } from "./detalhes-produto/detalhes-produto.component";
import { ProdutoResolve } from '../../services/produtos/produtos.resolve';


const produtoRouterConfig: Routes = [
    {
        path: ':id', component: ShowCaseComponent,
        resolve: {
            Product: ProdutoResolve
        }
    },
    {
        path: '', component: ShowCaseComponent,
        resolve: {
            Product: ProdutoResolve
        }
    },
    { path: 'produto-detalhe/:id', component: DetalhesProdutoComponent },
]


@NgModule({
    imports: [RouterModule.forChild(produtoRouterConfig)],
    exports: [RouterModule]
})
export class ShowcaseRoutesModule { }