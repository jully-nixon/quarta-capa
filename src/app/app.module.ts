//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormProdutoComponent } from './register/form-produto/form-produto.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { MyAdsListComponent } from './my-ads/my-ads-list/my-ads-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
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
import { MatRadioModule } from '@angular/material/radio';
import { DialogFormImgComponent } from './register/dialog-form-img/dialog-form-img.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCQNmCmqcpDYenXgRAhBLGv371zNmQ_ndU",
  authDomain: "quarta-capa.firebaseapp.com",
  projectId: "quarta-capa",
  storageBucket: "quarta-capa.appspot.com",
  messagingSenderId: "317953469538",
  appId: "1:317953469538:web:4c8bd850cda305b828353b",
  measurementId: "G-CVXQKY6ZN5"
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormProdutoComponent,
    HeaderComponent,
    HomeComponent,
    ListProductsComponent,
    MyAdsListComponent,
    ProductDetailsComponent,
    RegisterPageComponent,
    DialogFormImgComponent,
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
    NgxSpinnerModule,
    MaterialFileInputModule,
    MatIconModule,
    MatCurrencyFormatModule,
    MatDialogModule,
    MatRadioModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [{ provide: BUCKET, useValue: 'quarta-capa.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
