import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductLivro } from '../model/productLivro.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/';
  }

  getListProducts() {
    return this.http.get(`${this.apiUrl}`);
  }

  getProductsById() {
    return this.http.get(`${this.apiUrl}/id`);
  }

  postProduct(product: any) {
    return this.http.post(`${this.apiUrl}/livros`, product);
  }


}