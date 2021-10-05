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
    return this.http.get(`${this.apiUrl}/anuncios`);
  }

  getAdvertsById(id: string) {
    return this.http.get(`${this.apiUrl}/anuncios/${id}`);
  }

  getAdvertsByUser(idUser: string) {
    return this.http.get(`${this.apiUrl}/usuarios/${idUser}`);
  }

  getListDisciplina() {
    return this.http.get(`${this.apiUrl}/disciplinas`)
  }

  postProduct(product: any) {
    return this.http.post(`${this.apiUrl}/livros`, product);
  }

  deleteAdvert(idAdvert: string) {
    return this.http.delete(`${this.apiUrl}/anuncios/${idAdvert}`);
  }

  changeStatus(idAdvert: string, newStatus: string) {
    return this.http.put(`${this.apiUrl}/anuncios/alterarstatus/${idAdvert}`, { anuncioStatusEnum: newStatus });
  }

  getListProductsSearch(searchText: string) {
    return this.http.get(`${this.apiUrl}/anuncios/filtro?tituloDoAnuncio=${searchText}`);
  }

}
