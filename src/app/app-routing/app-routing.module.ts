import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './../customers/customers.component';
import { ProductsComponent } from './../products/products.component';

const routes: Routes = [{ path: 'products', component: ProductsComponent },
{ path: 'customers', component: CustomersComponent },

{
  path: '',
  redirectTo: '/products',
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
