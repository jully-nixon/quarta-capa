import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductListService } from 'src/app/shared/services/product-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  formularioPesquisa!: FormGroup;

  searchReturn!: any;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private productService: ProductListService,
  ) { }

  ngOnInit(): void {
    this.formularioPesquisa = this.fb.group({
      tituloAnuncio!: [null, Validators.required],
    })
  }

  goSearch(){
    console.log(this.formularioPesquisa.get('tituloAnuncio')?.value);
    this.productService.getListProductsSearch(this.formularioPesquisa.get('tituloAnuncio')?.value).subscribe(res => {
      this.searchReturn = res;
      console.log(res);
      console.log(this.searchReturn)
    });
  }

}
