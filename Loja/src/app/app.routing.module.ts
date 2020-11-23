import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderComponent } from './component/loader/loader.component';
import { HomeComponent } from './pages/user/home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'produto',
        loadChildren: () => import('./pages/admin/produtos/produtos.module')
            .then(m => m.ProdutosModule)
    },
    {
        path: 'checkout',
        loadChildren: () => import('./pages/user/checkout/checkout.module')
            .then(m => m.checkoutModule)
    },
    {
        path: 'showcase',
        loadChildren: () => import('./pages/user/showcase/show_case.module')
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

