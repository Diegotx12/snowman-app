import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import {  ProductsComponent} from "./components/products/products.component";
import { AboutComponent } from "./components/about/about.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
