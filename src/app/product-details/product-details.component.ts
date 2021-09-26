import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  detailsBook = { numeroCelular: '5581995667654', tituloLivro: '' };

  constructor(
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getIdProduct();
  }

  buyProduct() {
    window.location.href = `https://api.whatsapp.com/send?phone=${this.detailsBook.numeroCelular}
      &text=Olá!%20Tenho interesse no livro ${this.detailsBook.tituloLivro}.`;
  }

  getIdProduct() {
    const idProduct = this.ActivatedRoute.snapshot.params.id;
    console.log(idProduct)
  }

}
