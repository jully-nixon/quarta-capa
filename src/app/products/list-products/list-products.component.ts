import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../shared/services/product-list.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-list',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  books: any = [];

  constructor(
    public productListService: ProductListService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks() {
    this.spinner.show();
    this.productListService.getListProducts().subscribe(res => {
      if (res) {
        this.spinner.hide();
      }
      this.books = res;
    }, erro => {
      console.log(erro.error.message)
    });
  }

  showDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }


}
