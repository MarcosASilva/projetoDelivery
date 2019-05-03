import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  qtd = 0;
  cardapio = [ ];
  constructor() { for (let i = 0; i < 5 ; i++) {
    this.cardapio.push(
      {
        nome: 'Whooper',
        preco: 25.50,
        qtd: 0
      }
    );
  } }

  ngOnInit() {
  }
  add(i) {
    this.cardapio[i].qtd++;
  }
  minus(i) {
    if (this.cardapio[i].qtd > 0) {

      this.cardapio[i].qtd--;
    }    else {
      this.cardapio[i].qtd = 0;
    }
  }
}
