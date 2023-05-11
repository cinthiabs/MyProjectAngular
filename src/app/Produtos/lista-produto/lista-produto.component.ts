import { Component, OnInit } from '@angular/core';
import { produto } from '../Produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
templateUrl:'lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private ProdutoService: ProdutoService) { }
  public produtos!: produto[];
  ngOnInit(): void {
    this.ProdutoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos)
      },
      error => console.log(error)
    );
  }

}
