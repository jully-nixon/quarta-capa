import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buyProduct() {
    window.location.href = "https://api.whatsapp.com/send?phone=5581991318758" +
      "&text=Olá!%20Tenho interesse nesse livro.";
  }

}
