import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';


@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.css']
})
export class ListCoinsComponent implements OnInit {

  constructor(private _coinService: CoinService) { }
  listCoins = []; 
  ngOnInit() {  
      this._coinService.getCoins()
      .subscribe(
        res => this.listCoins = res,
        err => console.log(err)
      )
  // this.listCoins = this._coinService.getCoins();  
  // console.log('Coins Component: ', this.listCoins);
  }
   
}
