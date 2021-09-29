import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/v1';
  }

  getListProducts() {
    return this.http.get(`${this.apiUrl}/livros`);
  }

  getProductsById(id: string) {
    return this.http.get(`${this.apiUrl}/livros/${id}`);
  }


}
