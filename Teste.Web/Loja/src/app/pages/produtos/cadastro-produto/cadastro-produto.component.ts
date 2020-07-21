import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';

import { FormControlName, FormBuilder, Validators } from '@angular/forms';
import { ProdutoBaseComponent } from '../produto-form.base.component';
import { Validacao } from 'src/app/utils/validacao';
import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { tiposDeAlert } from 'src/app/enumerable/tipos_de_alert.enum'
import { categoryService } from '../../catefory/category.service';
import { ProdutosService } from '../produtos.service';
import { Photo } from 'src/app/core/models/photo';
import { ProductModel } from 'src/app/core/models/product.model';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
})
export class CadastroProdutoComponent extends ProdutoBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  imageChangedEvent: any = '';
  id: number
  showCropper = false;
  fileToUpload: File = null;
  errors: any
  constructor(private fb: FormBuilder,
    private produtoService: ProdutosService,
    private categoryService: categoryService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { super(); }

  ngOnInit(): void {

    this.produtoForm = this.fb.group({
      categoryId: [Number, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      shortDescription: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
      sale: [false, [Validacao.Sale]],
      salePrice: ['', [Validacao.SalePrice]],
      img: ['', []],
      brand: ['', [Validators.required]],
      price: ['', [Validators.required]],
      //ativo: [true]
    });

    if (this.config.data.id) {
      this.produtoService.getProduct(this.config.data.id).subscribe(
        product => {
          this.editar(product)
          this.id = product.id
        })
    } else {
      this.produtoForm.controls['salePrice'].setValue("0.00")
    }
    this.categoryService.getcategory()
      .subscribe(
        category => this.category = category);
  }

  editar(produto: ProductModel) {
    this.produtoForm.patchValue({
      categoryId: produto.categoryId,
      title: produto.title,
      shortDescription: produto.shortDescription,
      sale: produto.sale,
      salePrice: CurrencyUtils.DecimalParaString(produto.salePrice),
      img: '',
      brand: produto.brand,
      price: CurrencyUtils.DecimalParaString(produto.price),
    });
  }


  ngAfterViewInit(): void {
    super.configurarValidacaoFormulario(this.formInputElements);
  }

  adicionarProduto() {
    if (this.produtoForm.dirty && this.produtoForm.valid) {
      this.produto = Object.assign({}, this.produto, this.produtoForm.value);

      this.produto.img = null;
      this.produto.categoryId = Number(this.produto.categoryId)
      this.produto.price = CurrencyUtils.StringParaDecimal(this.produto.price)
      this.produto.salePrice = CurrencyUtils.StringParaDecimal(this.produto.salePrice);


      if (this.config.data.id) {
        this.produto.id = this.id;
        this.produtoService.atualizarProduto(this.produto)
          .subscribe(
            (produto: ProductModel) => {
              if (this.photo) {
                this.photo.ProductId = this.produto.id
                this.produtoService.postImg(this.photo)
                  .subscribe(
                    sucesso => {
                      this.processarSucesso(sucesso);
                    },
                    falha => { this.processarFalha(falha) }
                  );
              }
              this.ref.close(produto);
            },
            falha => { this.processarFalha(falha) }
          )
      } else {

        this.produtoService.post(this.produto)
          .subscribe(
            (produto: ProductModel) => {
              this.photo.ProductId = produto.id
              this.ref.close(produto);
              this.produtoService.postImg(this.photo)
                .subscribe(
                  sucesso => { this.processarSucesso(sucesso); },
                  falha => { this.processarFalha(falha) }
                );
            },
            falha => { this.processarFalha(falha) }
          );
      }
      this.mudancasNaoSalvas = false;
    } else {
      this.messagemToastr('Ocorreu um erro',tiposDeAlert.error)
    }
  }

  processarSucesso(response: any) {
    this.produtoForm.reset();
    this.errors = [];
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.messagemToastr('Ocorreu um erro',tiposDeAlert.error)
  }

  fileChangeEvent(files: FileList): void {

    this.photo = new Photo
    this.photo.file = files.item(0)
    // this.imageChangedEvent = event;
    // this.imagemNome = event.currentTarget.files[0].name;
  }
  sale() {
    return this.produtoForm.controls.sale.value
  }
  imageLoaded() {
    this.showCropper = true;
  }

  loadImageFailed() {
    this.errors.push('O formato do arquivo  não é aceito.');
  }
}

