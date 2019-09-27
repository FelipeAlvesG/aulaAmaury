import { Component } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  produtos : any[];
  constructor(private produtosService:ProdutosService, private router:Router) {

    this.produtos = produtosService.getProdutos();
    
  }

  tela(){
    this.router.navigate(['/produto']);
  }  
}
