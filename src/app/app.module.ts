//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { MyAdsListComponent } from './my-ads/my-ads-list/my-ads-list.component';
import { MyAdsDetailsComponent } from './my-ads/my-ads-details/my-ads-details.component';

//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    MyAdsListComponent,
    MyAdsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
