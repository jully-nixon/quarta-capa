import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/shared/services/product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  detailsBook: any = [];

  constructor(
    private ActivatedRoute: ActivatedRoute,
    public productListService: ProductListService
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
    this.productListService.getProductsById(idProduct).subscribe((res => {
      this.detailsBook = res;
      console.log(res)
    }))
    console.log(idProduct)
  }

}
