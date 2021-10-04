//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormProdutoComponent } from './register/form-produto/form-produto.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { MyAdsListComponent } from './my-ads/my-ads-list/my-ads-list.component';
import { MyAdsDetailsComponent } from './my-ads/my-ads-details/my-ads-details.component';
import { MyAdsListComponent } from './my-ads/my-ads-list/my-ads-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { NgxSpinnerModule } from "ngx-spinner";
import { RegisterPageComponent } from './register/register-page/register-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { MatDialogModule } from '@angular/material/dialog'; 
import {MatRadioModule} from '@angular/material/radio'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormProdutoComponent,
    HeaderComponent,
    HomeComponent,
    ListProductsComponent,
    MyAdsDetailsComponent,
    MyAdsListComponent,
    ProductDetailsComponent,
    RegisterPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatSelectModule,
    NgxSpinnerModule
    MaterialFileInputModule,
    MatIconModule,
    MatCurrencyFormatModule,
    MatDialogModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
