import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControlName, FormBuilder, Validators } from '@angular/forms';
import { ProdutoBaseComponent } from '../produto-form.base.component';
import { categoryService } from '../../../services/catefory/category.service';
import { ProdutosService } from '../../../services/produtos/produtos.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Validacao } from '../../../utils/validacao';
import { ProductModel, Photo } from '../../../core/models/product.model';
import { CurrencyUtils } from '../../../utils/currency-utils';
import { tiposDeAlert } from '../../../enumerable/tipos_de_alert.enum';
import { SubCategoriaService } from '../../../services/subCategoria/sub-categoria.service';

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
  errors: any;
  subCategoriaId;

  constructor(private fb: FormBuilder,
    private produtoService: ProdutosService,
    private categoryService: categoryService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public subCategoriaService: SubCategoriaService
  ) { super(); }

  ngOnInit(): void {

    this.categoryService.getcategory()
      .subscribe(
        category => this.category = category
      );

    this.produtoForm = this.fb.group({
      categoryId: [Number, [Validators.required]],
      subCategoriaId: [Number, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      shortDescription: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
      sale: [false, [Validacao.Sale]],
      salePrice: ['', [Validacao.SalePrice]],
      img: [''],
      brand: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
    if (this.config.data.id) {
      this.produtoService.getProduct(this.config.data.id).subscribe(
        (product: ProductModel) => {
          delete product.category;
          delete product.subCategoria;
          this.produto = product;
          this.imageChangedEvent = product.img
          this.changeCategory(product.categoryId).then(resposta => {
            if (resposta) this.editar(product);
          });
        })
    } else {
      this.produtoForm.controls['salePrice'].setValue("0.00")
    }
  }

  editar(produto: ProductModel) {
    this.produtoForm.patchValue({
      categoryId: produto.categoryId,
      title: produto.title,
      shortDescription: produto.shortDescription,
      sale: produto.sale,
      salePrice: CurrencyUtils.DecimalParaString(produto.salePrice),
      brand: produto.brand,
      price: CurrencyUtils.DecimalParaString(produto.price),
      subCategoriaId: produto.subCategoriaId
    });
  }


  ngAfterViewInit(): void {
    super.configurarValidacaoFormulario(this.formInputElements);
  }

  adicionarProduto() {
    if (this.produtoForm.dirty && this.produtoForm.valid) {
      this.produto = Object.assign({}, this.produto, this.produtoForm.value);
      this.produto.categoryId = Number(this.produto.categoryId)
      this.produto.subCategoriaId = Number(this.produto.subCategoriaId)
      this.produto.price = CurrencyUtils.StringParaDecimal(this.produto.price)
      this.produto.salePrice = CurrencyUtils.StringParaDecimal(this.produto.salePrice);

      if (this.config.data.id) {
        this.produto.img = this.imageChangedEvent;
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
        this.produto.img = null;
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
    } else {
      this.messagemToastr('Ocorreu um erro', tiposDeAlert.error)
    }
  }

  processarSucesso(response: any) {
    this.produtoForm.reset();
    this.errors = [];
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.messagemToastr('Ocorreu um erro', tiposDeAlert.error)
  }

  fileChangeEvent(files: FileList): void {
    if (files.item(0).type && files.item(0).type.indexOf('image') === -1) {
      console.log('File is not an image.', files.item(0).type, files.item(0));
      return;
    }

    this.photo = new Photo
    this.photo.file = files.item(0)
    const reader = new FileReader();
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

  changeCategory(item): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.subCategoriaService.getProduct(item).
      subscribe(
        resp => { this.subCategoria = resp }, 
        error => reject(false),
        () => { resolve(true) }
      )
    });
  }
}

