import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produto: any[];
  constructor(private produtosService:ProdutosService){ 

    this.produto = produtosService.getProduto();
  }

  ngOnInit() {
  }

}
