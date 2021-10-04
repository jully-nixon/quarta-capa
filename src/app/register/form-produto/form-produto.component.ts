import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ProductListService } from '../../shared/services/product-list.service';
import { FileValidator } from 'ngx-material-file-input';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyErrorStateMatcher } from './input-state-matchers';

interface ValueView {
  value: string,
  viewValue: string;
}


@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss'],
  providers: [
    { provide: ErrorStateMatcher, useClass: MyErrorStateMatcher}
  ]
})
export class FormProdutoComponent implements OnInit {

  // readonly maxSize = 2097152; 2MB
  readonly maxSize = 2621440;

  anoLivro: string[] = [
    '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014',
    '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006'
  ];

  anoEscolar: ValueView[] = [
    {value: 'NAO_SE_APLICA', viewValue: 'Não se aplica'},
    {value: 'PRIMEIRO_ANO_FUNDAMENTAL', viewValue: '1º ano do Fundamental'},
    {value: 'SEGUNDO_ANO_FUNDAMENTAL', viewValue: '2º ano do Fundamental'},
    {value: 'TERCEIRO_ANO_FUNDAMENTAL', viewValue: '3º ano do Fundamental'},
    {value: 'QUARTO_ANO_FUNDAMENTAL', viewValue: '4º ano do Fundamental'},
    {value: 'QUINTO_ANO_FUNDAMENTAL', viewValue: '5º ano do Fundamental'},
    {value: 'SEXTO_ANO_FUNDAMENTAL', viewValue: '6º ano do Fundamental'},
    {value: 'SETIMO_ANO_FUNDAMENTAL', viewValue: '7º ano do Fundamental'},
    {value: 'OITAVO_ANO_FUNDAMENTAL', viewValue: '8º ano do Fundamental'},
    {value: 'NONO_ANO_FUNDAMMENTAL', viewValue: '9º ano do Fundamental'},
    {value: 'PRIMEIRO_ANO_MEDIO', viewValue: '1º no ensino Médio'},
    {value: 'SEGUNDO_ANO_MEDIO', viewValue: '2º no ensino Médio'},
    {value: 'TERCEIRO_ANO_MEDIO', viewValue: '3º no ensino Médio'},
  ]

  estadoLivro: ValueView[] = [
    {value: 'NOVO', viewValue: 'Novo'},
    {value: 'USADO_EM_OTIMA_CONDICAO', viewValue: 'Usado em ótima condição'},
    {value: 'USADO', viewValue: 'Usado'},
  ]

  formularioProduto!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductListService,
  ) { }

  ngOnInit(): void {
    this.formularioProduto =this.fb.group({
      isbn!: [null, [Validators.required]],
      titulo!: [null, Validators.required],
      autor!: [null, Validators.required],
      editora!: [null, Validators.required],
      ano!: [null, Validators.required],
      valor!: [null, Validators.required],
      descricaoEstado!: [null, Validators.required],
      disponivelParaDoacao!: [false, Validators.required],
      idDisciplina!: [null, Validators.required],
      anoEscolar!: [null, Validators.required],
      tituloDoAnuncio!: [null, Validators.required],
      descricao!: [null, Validators.required],
      foto!: [null, [Validators.required, FileValidator.maxContentSize(this.maxSize)]],
      idUsuario!: ["id-usuário", Validators.required],
    })

    const listaDiciplinas = this.productService.getListDisciplina();
    console.log(listaDiciplinas);
  }

  matcher = new MyErrorStateMatcher();

  //Value Field functions
  isShown = true;

  showValueField(){
    if (this.isShown == true) {
      this.isShown = false;
      this.formularioProduto.value.valor = 0;
    }
    else {
      this.isShown = true;
      this.formularioProduto.value.valor = null;
    }
  }

  //Buttons functions
  cancel(){
    this.formularioProduto.reset();
  }

  criarProduto(){
    console.log(this.formularioProduto);

    // this.productService.postProduct(this.formularioProduto.value);
    // this.formularioProduto.reset();
  }

  fileChangeEvent(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
    };
    this.formularioProduto.setValue({
      foto: reader.result,
    })
  }

  

}
