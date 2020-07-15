import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowCaseComponent } from "./show_case.component";
import { DetalhesProdutoComponent } from "./detalhes-produto/detalhes-produto.component";

const routes: Routes = [

    { path: '', component: ShowCaseComponent},
    { path: 'produto-detalhe/:id', component: DetalhesProdutoComponent },

]


@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ShowcaseRoutesModule { }