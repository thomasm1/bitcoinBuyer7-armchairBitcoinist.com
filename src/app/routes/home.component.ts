// TODO ...
// switch xhttp to http service
import { Component, OnInit } from "@angular/core";
import { LambdaPriceService } from "../services/lambda-price.service";
import { Price } from "../models/price.model";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  /////////// MUST CONVERT TO TYPESCRIPT!!!! //////////////////
  // price:Price[];
  prices: any;
  clear = function () {
    document.getElementById("coin-update").innerHTML = ``
  }
  tempData = function () {
    let r = [
      {
        "id": 9928382,
        "unix": 1607040000,
        "date": "2020-12-04 00:00:00",
        "symbol": "BTC/USD",
        "open": 19446.43,
        "high": 19546.46,
        "low": 18576.05,
        "close": 18675.01,
        "volto": 16343.35650594,
        "volfrom": 305212346.18199456
      },
    ];
    document.getElementById("coin-update").innerHTML = `
<li id="${r[0].date}" class="bitDiv">
<h6><strong>${r[0].symbol}:&nbsp;  ${r[0].date} </strong> </h6>
<p>Open: ${r[0].open}    &nbsp;&nbsp;&nbsp;&nbsp; Low: ${r[0].low}</p>
<p>Close: ${r[0].close}   &nbsp;&nbsp;&nbsp;&nbsp; High: ${r[0].high}</p>
<div>Volume BTC: ${r[0].volto}
</div>
<div>Volume USD: ${r[0].volfrom}
</div>
<hr>
</li>
`;
  };

  coinLambda = function (coinUrl) {
    document.getElementById("coin-update").innerHTML = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("coinJson").innerHTML = this.responseText;
        console.log(this.responseText);
        var rParsed = JSON.parse(this.responseText);
        console.log(rParsed.body);
        var r = rParsed.body;
        for (let i = 0; i < r.length; i++) {
          var coins = `
		  <li id="${r[i].date}" class="bitDiv">
		  <h6><strong>${r[i].symbol}:&nbsp;  ${r[i].date} </strong> </h6>
		  <p>Open: ${r[i].open}    &nbsp;&nbsp;&nbsp;&nbsp; Low: ${r[i].low}</p>
		  <p>Close: ${r[i].close}  &nbsp;&nbsp;&nbsp;&nbsp; High: ${r[i].high}</p>
      <div>Volume BTC: ${r[i].volto}
      </div>
      <div>Volume USD: ${r[i].volfrom}
      </div>
		  <hr>
		  </li>
		  `;
          document.getElementById("coin-update").innerHTML += coins;
        }
      }
    };

    // TODO - make service!!
    // make vars to get from service in constructor..
    let vurl;

    console.log(coinUrl);
    if ("bitcoin" === coinUrl) {
      vurl =
        "https://jdkxd2ny04.execute-api.us-east-1.amazonaws.com/prod/thomasMiltonFunction";
    } else if ("ether" === coinUrl) {
      vurl =
        "https://o8fasqpzp4.execute-api.us-east-1.amazonaws.com/prod/ThomasMiltonServerless";
    } else if ("litecoin" === coinUrl) {
      vurl =
        "https://ebdfwshgh4.execute-api.us-east-1.amazonaws.com/default/lambdaLitecoin";
    } else {
      console.log("Oops, no data ... Check your internet connection :]");
    }
    xhttp.open("GET", vurl, true);
    xhttp.send();
  };

  constructor(private _lambdaPriceService: LambdaPriceService) {}

  ngOnInit() {
    this.tempData();
    this.prices = this._lambdaPriceService.getPrices();
    //this.getPrices();
    // this.initPromise();
    // this.initAsync1();
    // this.initAsync();
  }

  getPriceList(): any {
    console.log(this.prices);
    return this.prices;
  }
  //   arrayDelay = [
  //     {
  //    "Date": "2019-10-17",
  //    "Symbol": "BTCUSD",
  //    "Open": 7993.54,
  //    "High": 8070,
  //    "Low": 7937.01,
  //    "Close": 8034.32,
  //    "Volume BTC": 1570.08,
  //    "Volume USD": 12537245.82
  //  }
  //   ];

  // lambda-price.service.ts
  // price.model.ts
  // getPrices() {
  //   console.log("getPrices Service");
  //   this.lambdaPriceService.getPrices();
  //      this.listPrices = {
  //    // .subscribe((data: Price) => this.price = {
  //       Symbol: Symbol, //data['Symbol'],
  //       Date: Date, //  data['Date'],
  //       Open: Open, //data['Open'],
  //       High: High, // data['High'],
  //       Low: Low, //data['Low'],
  //       Close: Close, // data['Close']
  //     });
  //     console.log(this.price)
  //     return this.price;
  // }

  // afterTheDelay = function () {
  //   console.log("afterTheDelay");
  //   let outputPromise = "";
  //   this.arrayDelay.forEach((arrayDelay, index) => {
  //     outputPromise += `<div>Date: ${arrayDelay.Date} <br />Symbol:  ${arrayDelay.Symbol}<br /> Open: ${arrayDelay.Open} <br />Close: ${arrayDelay.Close}<hr></div>`;
  //   });
  //   document.getElementById("promises").innerHTML = "<strong>Historical Bitcoin:</strong><br />" + outputPromise;
  // }

  // addPromise = function (price) {
  //   console.log("addPromise");
  //   return new Promise((resolve, reject) => {
  //     // setTimeout(() => {
  //     this.arrayDelay.push(price);
  //     // const error = true;
  //     const error = false;
  //     if (!error) {
  //       resolve();
  //     } else {

  //       reject(console.log("%c Promise Errorrr occured", "color:orange; border:solid 1px orange"));
  //     }
  //     // }, 2000);
  //   });
  // }

  // initAsync = async function () {
  //   console.log("initAsync");
  //   await this.addPromise({
  //     "Date": "2020-01-01",
  //     "Symbol": "BTC",
  //     "Open": 13000.00,
  //     "High": 14000,
  //     "Low": 12000.00,
  //     "Close": 1350.00
  //   })
  //     .then(this.afterTheDelay)
  //     .catch(err => console.log(err));
  //   this.afterTheDelay();
  // }

  // promise1 = Promise.resolve("Price 1");
  // promise2 = 10;
  // promise3 = new Promise((resolve, reject) =>
  //   setTimeout(resolve, 2000, "Timeout-2000ms")
  // );
  // promise4 = fetch(
  //   "https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json"
  // ).then(res => res.json());

  // initPromise = async function () {
  //   Promise.all([this.promise1, this.promise2, this.promise3, this.promise4]).then(_values =>
  //     console.log(_values)
  //   );
  //   Promise.all([this.promise1, this.promise2, this.promise3, this.promise4]).then(
  //     values =>

  //     (document.getElementById("promiseAll").innerHTML =
  //         "<strong>API: https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json> </strong><br />   Date: " + values[3][1].Date + ' Symbol:' + values[3][1].Symbol + ' Close: ' + values[3][1].Close)
  //   );

  // }

  // initAsync1 = async function () {
  //   await this.addPromise({
  //     "Date": "2020-01-02",
  //     "Symbol": "coinASYNCAdded",
  //     "Open": 13000.00,
  //     "High": 14000,
  //     "Low": 12000.00,
  //     "Close": 1350.00
  //   });
  //   this.afterTheDelay();
  // }
}
