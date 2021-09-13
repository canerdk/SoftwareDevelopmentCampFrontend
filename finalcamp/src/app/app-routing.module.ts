import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'products/category/:id', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
