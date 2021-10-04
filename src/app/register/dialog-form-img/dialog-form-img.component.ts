import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileValidator } from 'ngx-material-file-input';
import { ProductListService } from 'src/app/shared/services/product-list.service';

@Component({
  selector: 'app-dialog-form-img',
  templateUrl: './dialog-form-img.component.html',
  styleUrls: ['./dialog-form-img.component.scss']
})
export class DialogFormImgComponent implements OnInit {
  
  // readonly maxSize = 2097152; 2MB
  readonly maxSize = 2621440;
  formularioProdutoFoto!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogFormImgComponent>,
    private fb: FormBuilder,
    private productService: ProductListService,
  ) { }

  ngOnInit(): void {
    this.formularioProdutoFoto = this.fb.group({
      foto!: [null, [FileValidator.maxContentSize(this.maxSize)]],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
