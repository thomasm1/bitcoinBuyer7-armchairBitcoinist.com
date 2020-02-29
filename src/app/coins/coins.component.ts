import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'tm-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  coins = []
  constructor(private _coinService: CoinService) { }

  ngOnInit() {
    this._coinService.getCoins()
      .subscribe(
        res => this.coins = res,
        err => console.log(err)
      )
  }
}
