import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoaderComponent } from './component/loader/loader.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'produto',
        loadChildren: () => import('./pages/produtos/produtos.routes')
            .then(m => m.ProdutoRoutesModule)
    },
    {
        path: 'checkout',
        loadChildren: () => import('./pages/checkout/checkout.module')
            .then(m => m.checkoutModule)
    },
    {
        path: 'showcase',
        loadChildren: () => import('./pages/showcase/show_case.module')
            .then(m => m.ShowcaseModule)
    },    
    {
        path: 'loading',
        component: LoaderComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

