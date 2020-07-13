import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';

import { FormControlName, FormBuilder, Validators } from '@angular/forms';
import { ProdutoBaseComponent } from '../produto-form.base.component';
import { Router } from '@angular/router';
import { Validacao } from 'src/app/utils/validacao';
import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { ProdutosService } from '../produtos.service';
import { categoryService } from '../../catefory/category.service';
import { Category } from 'src/app/core/models/category.model';

// import { CurrencyUtils } from 'src/app/utils/currency-utils';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent extends ProdutoBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  imageURL: string;
  imagemNome: string;
  category:Category[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private produtoService: ProdutosService,
    private categoryService :categoryService) { super(); }

  ngOnInit(): void {

    this.categoryService.getcategory()
      .subscribe(
        category => this.category = category);


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
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormulario(this.formInputElements);
  }

  adicionarProduto() {
    if (this.produtoForm.dirty && this.produtoForm.valid) {
      this.produto = Object.assign({}, this.produto, this.produtoForm.value);
      this.produto.categoryId = Number(this.produto.categoryId); 
      this.produto.img = null;
      this.produto.salePrice = CurrencyUtils.StringParaDecimal(this.produto.salePrice);
      this.produto.price = CurrencyUtils.StringParaDecimal(this.produto.price);

      this.produtoService.post(this.produto)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.produtoForm.reset();
    this.errors = [];

    // let toast = this.toastr.success('Produto cadastrado com sucesso!', 'Sucesso!');
    // if (toast) {
    //   toast.onHidden.subscribe(() => {
    //     this.router.navigate(['/produtos/listar-todos']);
    //   });
    // }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    // this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imagemNome = event.currentTarget.files[0].name;
  }
  sale() {
    if(!this.produtoForm.controls.sale.value) this.produtoForm.controls['salePrice'].setValue(0.00);
    return this.produtoForm.controls.sale.value
  }
  imageLoaded() {
    this.showCropper = true;
  }

  loadImageFailed() {
    this.errors.push('O formato do arquivo ' + this.imagemNome + ' não é aceito.');
  }
}

