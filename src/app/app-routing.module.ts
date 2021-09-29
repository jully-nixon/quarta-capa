import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAdsListComponent } from './my-ads/my-ads-list/my-ads-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'my-ads', component: MyAdsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
