import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";
import { ListaComponent } from "./lista/lista.component";

const routes: Routes = [

    { path: '', component: ListaComponent},
    { path: 'cadastro', component: CadastroProdutoComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ProdutoRoutesModule { }