import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductListService } from '../../shared/services/product-list.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from './input-state-matchers';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

interface ValueView {
  value: string,
  viewValue: string;
}

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss'],
  providers: [
    { provide: ErrorStateMatcher, useClass: MyErrorStateMatcher }
  ]
})
export class FormProdutoComponent implements OnInit {

  myDisciplinas: any;
  imageUrl: string = '';
  isShown: boolean = true;

  anoLivro: number[] = [
    2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
    2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006
  ];

  anoEscolar: ValueView[] = [
    { value: 'NAO_SE_APLICA', viewValue: 'Não se aplica' },
    { value: 'PRIMEIRO_ANO_FUNDAMENTAL', viewValue: '1º ano do Fundamental' },
    { value: 'SEGUNDO_ANO_FUNDAMENTAL', viewValue: '2º ano do Fundamental' },
    { value: 'TERCEIRO_ANO_FUNDAMENTAL', viewValue: '3º ano do Fundamental' },
    { value: 'QUARTO_ANO_FUNDAMENTAL', viewValue: '4º ano do Fundamental' },
    { value: 'QUINTO_ANO_FUNDAMENTAL', viewValue: '5º ano do Fundamental' },
    { value: 'SEXTO_ANO_FUNDAMENTAL', viewValue: '6º ano do Fundamental' },
    { value: 'SETIMO_ANO_FUNDAMENTAL', viewValue: '7º ano do Fundamental' },
    { value: 'OITAVO_ANO_FUNDAMENTAL', viewValue: '8º ano do Fundamental' },
    { value: 'NONO_ANO_FUNDAMMENTAL', viewValue: '9º ano do Fundamental' },
    { value: 'PRIMEIRO_ANO_MEDIO', viewValue: '1º no ensino Médio' },
    { value: 'SEGUNDO_ANO_MEDIO', viewValue: '2º no ensino Médio' },
    { value: 'TERCEIRO_ANO_MEDIO', viewValue: '3º no ensino Médio' },
  ]

  estadoLivro: ValueView[] = [
    { value: 'NOVO', viewValue: 'Novo' },
    { value: 'USADO_EM_OTIMAS_CONDICOES', viewValue: 'Usado em ótimas condições' },
    { value: 'USADO', viewValue: 'Usado' },
  ]

  formularioProduto!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductListService,
    private storage: AngularFireStorage
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
      disponivelParaDoacao!: [false, Validators.required],
      idDisciplina!: [null, Validators.required],
      anoEscolar!: [null, Validators.required],
      tituloDoAnuncio!: [null, Validators.required],
      descricao!: [null, Validators.required],
      fotoLivro!: [null, Validators.required],
      idUsuario!: ["0593d811-10fc-4a4e-97a4-67a6647000e2"],
      anuncioStatus!: ['DISPONIVEL']
    })

    this.getMyDisciplinas();
  }

  getMyDisciplinas() {
    this.productService.getListDisciplina().subscribe(res => {
      this.myDisciplinas = res;
    }, erro => {
      console.log(erro.error.message)
    });
  }

  matcher = new MyErrorStateMatcher();

  showValueField(event: any) {
    if (event.checked) {
      this.isShown = false;
      this.formularioProduto.patchValue({ valor: 0 });
    }
    else {
      this.isShown = true;
      this.formularioProduto.value.valor = null;
    }
  }

  //Buttons functions
  cancel() {
    this.formularioProduto.reset();
  }

  criarProduto() {
    this.formularioProduto.patchValue({
      valor: parseFloat(this.formularioProduto.get('valor')?.value),
      fotoLivro: this.imageUrl,
    })

    this.productService.postProduct(this.formularioProduto.value);
    // location.reload();
  }

  fileChangeEvent(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          if (url) {
            this.imageUrl = url;
          }
        });
      })
    ).subscribe();
  }



}
