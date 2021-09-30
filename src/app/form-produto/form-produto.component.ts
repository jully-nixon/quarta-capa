import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductListService } from '../shared/services/product-list.service';


@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent implements OnInit {

  formularioProduto!: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private productService: ProductListService,
  ) { }

  ngOnInit(): void {

    this.formularioProduto = this.fb.group({
      isbn!: [null, Validators.required],
      titulo!: [null, Validators.required],
      autor!: [null, Validators.required],
      editora!: [null, Validators.required],
      ano!: [null, Validators.required],
      valor!: [null, Validators.required],
      descricaoEstado!: [null, Validators.required],
      disponivelParaDoacao!: [null, Validators.required],
      idDisciplina!: [null, Validators.required],
      anoEscolar!: [null, Validators.required],
      tituloDoAnuncio!: [null, Validators.required],
      descricao!: [null, Validators.required],
      foto!: [null, Validators.required],
      idUsuario!: [null, Validators.required],
    })

  }

  // criarProduto(){
  //   this.rest.postProduct(this.formularioProduto.value);
  //   this.formularioProduto.reset();
  // }

}
