import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    // { path: '', component: ListaComponent},
    // { path: 'cadastro', component: CadastroProdutoComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ProdutoRoutesModule { }