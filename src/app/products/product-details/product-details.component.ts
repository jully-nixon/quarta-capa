import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductListService } from 'src/app/shared/services/product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  detailsBook: any = [];
  hiddenButtonWhatsapp: boolean = false;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    public productListService: ProductListService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getIdProduct();
  }

  buyProduct() {
    window.open(`https://api.whatsapp.com/send?phone=${this.detailsBook.numeroCelular}
      &text=Olá!%20${this.detailsBook.nome},%20tenho interesse no livro ${this.detailsBook.tituloDoLivro}. '_blank'`);
  }

  getIdProduct() {
    this.spinner.show();
    const idAdverts = this.ActivatedRoute.snapshot.params.id;
    this.productListService.getAdvertsById(idAdverts).subscribe((res => {
      if (res) {
        this.spinner.hide();
      }
      this.detailsBook = res;
    }))
  }

}
