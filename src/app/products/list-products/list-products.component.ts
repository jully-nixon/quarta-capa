import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../shared/services/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  books: any = [];

  constructor(
    public productListService: ProductListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks() {
    this.productListService.getListProducts().subscribe(res => {
      this.books = res;
      console.log(this.books)
    }, erro => {
      console.log(erro.error.message)
    });
  }

  showDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

}
