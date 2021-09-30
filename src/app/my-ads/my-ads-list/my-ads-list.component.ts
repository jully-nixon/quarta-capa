import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/shared/services/product-list.service';

@Component({
  selector: 'app-my-ads-list',
  templateUrl: './my-ads-list.component.html',
  styleUrls: ['./my-ads-list.component.scss']
})
export class MyAdsListComponent implements OnInit {
  myAds: any = {};

  constructor(
    public productListService: ProductListService
  ) { }

  ngOnInit(): void {
    this.getMyAds();
  }

  getMyAds() {
    let idUser = "d9dabae4-94c9-414c-bdc5-b2bab4fdc580";
    this.productListService.getAdvertsByUser(idUser).subscribe(res => {
      this.myAds = res;
      console.log(this.myAds)
    }, erro => {
      console.log(erro.error.message)
    });
  }

}
