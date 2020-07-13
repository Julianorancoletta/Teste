import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'produto',
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule)
    },
    {
        path: 'checkout',
        loadChildren: () => import('./pages/checkout/checkout.module')
            .then(m => m.checkoutModule)
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

