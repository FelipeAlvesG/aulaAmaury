import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  produto: any[];
  constructor(private produtosService:ProdutosService, public loadingController: LoadingController, public alertController: AlertController){ 

    this.produto = produtosService.getProduto();
  }

  async confirmaPedido() {
    const loading = await this.loadingController.create({
      message: 'Confirmando',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
     this.msgConfirma();
  }
  async msgConfirma() {
    const alert = await this.alertController.create({
      header: 'Pedido Confirmado',
      message: 'Se o Correio ajudar, um dia chega!',
      buttons: ['OK']
    });
  await alert.present();  
  }
    ngOnInit() {
  }

}
