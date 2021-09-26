import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../shared/services/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books = [
    {
      "id": 1,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    },
    {
      "id": 2,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    },
    {
      "id": 3,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    },
    {
      "id": 4,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    },
    {
      "id": 5,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    },
    {
      "id": 6,
      "title": 'Viver Ciências 6',
      "subtitle": 'Ciências / 6º Ano',
      "valor": 'R$50',
    }
  ]

  constructor(
    public productListService: ProductListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks() {
    this.productListService.getListProducts().subscribe(res => {
      console.log(res)
    }, erro => {
      console.log(erro.error.message)
    });
  }

  showDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

}
