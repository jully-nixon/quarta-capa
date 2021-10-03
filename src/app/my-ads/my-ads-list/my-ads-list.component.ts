import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductListService } from 'src/app/shared/services/product-list.service';

@Component({
  selector: 'app-my-ads-list',
  templateUrl: './my-ads-list.component.html',
  styleUrls: ['./my-ads-list.component.scss']
})
export class MyAdsListComponent implements OnInit {
  myAds: any = {};
  hiddenButtonWhatsapp: boolean = false;

  constructor(
    public productListService: ProductListService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getMyAds();
  }

  getMyAds() {
    this.spinner.show();
    let idUser = "d9dabae4-94c9-414c-bdc5-b2bab4fdc580";
    this.productListService.getAdvertsByUser(idUser).subscribe(res => {
      if(res) {
        this.spinner.hide();
      }
      this.myAds = res;
      console.log(this.myAds)
    }, erro => {
      console.log(erro.error.message)
    });
  }

  showDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

}
