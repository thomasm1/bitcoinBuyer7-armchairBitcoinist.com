import { Injectable } from '@angular/core';
import { Coin } from '../models/coin.model';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor() { }
  
  private listCoins: Coin[] =
    [
      {
        "id": 1,
        "user_id":"t",
        "Date": "2019/07/04",
        "Symbol": "BTCUSD",
        "Open": 11976.42,
        "High": 12064.26,
        "Low": 11820,
        "Close": 11909.55,
        "Volume BTC": 1237.57,
        "Volume USD": 14790355.69
      },
      {
        "id": 2,
        "user_id":"te",
        "Date": "2019/07/03",
        "Symbol": "BTCUSD",
        "Open": 10829.18,
        "High": 12014.6,
        "Low": 10829.18,
        "Close": 11976.42,
        "Volume BTC": 36836.85,
        "Volume USD": 419076229.34
      }, 
      {
        "id": 3,
        "user_id":"te",
        "Date": "2019/07/04",
        "Symbol": "ETHUSD",
        "Open": 301.79,
        "High": 304,
        "Low": 300.39,
        "Close": 301.5,
        "Volume ETH": 3825.69,
        "Volume USD": 1154988.12
      },
      {
        "id": 4,
        "user_id":"te",
        "Date": "2019/07/03",
        "Symbol": "ETHUSD",
        "Open": 291.25,
        "High": 303.83,
        "Low": 289.61,
        "Close": 301.79,
        "Volume ETH": 105691.96,
        "Volume USD": 31264397.55
      }
    ];

  getCoins(): Coin[] {
    return this.listCoins;
  }

  getCoin(id: number)  {
   return this.listCoins.find(c => c.id == id)
  }
}
