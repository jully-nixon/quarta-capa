import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductListService } from 'src/app/shared/services/product-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-ads-list',
  templateUrl: './my-ads-list.component.html',
  styleUrls: ['./my-ads-list.component.scss']
})
export class MyAdsListComponent implements OnInit {
  myAds: any = {};
  hiddenButtonWhatsapp: boolean = false;
  adStatus: String = '';

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
    let idUser = "cf1cb644-bd11-4250-938b-57b70fdcf9cf";
    this.productListService.getAdvertsByUser(idUser).subscribe(res => {
      if (res) {
        this.spinner.hide();
      }
      this.myAds = res;
    }, erro => {
      console.log(erro.error.message)
    });
  }

  showDetails(id: string) {
    this.router.navigate(['/product-details', id]);
  }

  deleteAdvert(id: string) {
    this.productListService.deleteAdvert(id).subscribe();
    this.getMyAds();
  }

  updateStatus(id: string, event: any) {
    const newStatus = event.target.value;
    this.productListService.changeStatus(id, newStatus).subscribe();
  }

  alertDeleteAdvert(id: string) {
    Swal.fire({
      title: 'EXCLUIR ANÚNCIO',
      text: 'Deseja realmente excluir o anúncio?',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productListService.deleteAdvert(id).subscribe();
        location.reload();
      }
    });
  }

}
