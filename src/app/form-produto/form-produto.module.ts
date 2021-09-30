import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProdutoComponent } from './form-produto.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [
    FormProdutoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class FormProdutoModule { }
