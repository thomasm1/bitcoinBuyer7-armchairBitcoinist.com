// switch xhttp to http service
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coinLambda = function() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("coinJson").innerHTML = this.responseText;
                    console.log(this.responseText);
                    var rParsed = JSON.parse(this.responseText);
                    console.log(rParsed.body);
                    var r = rParsed.body;
                    for (let i = 0; i < r.length; i++) {
                        var coins = ` 
		  <li id="${r[i].Date}" class="bitDiv">  
		  <h6><strong>${r[i].Symbol}:&nbsp;  ${r[i].Date} </strong> </h6>   
		  <h6>Open: ${r[i].Open} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Low: ${r[i].Low}</h6>
		  <h6>Close: ${r[i].Close} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; High: ${r[i].High}</h6> 
	<!--  <div>Volume BTC: ${r[i].BTC}
		  </div>
		  <div>Volume USD: ${r[i].USD}
		  </div> -->
		  <hr>
		  </li>
		  `;
                        document.getElementById('coinFormat').innerHTML += coins;
                    }

                }
            };
            xhttp.open("GET", "https://jdkxd2ny04.execute-api.us-east-1.amazonaws.com/prod/thomasMiltonFunction", true);
            xhttp.send();
        }


  constructor() {

  }

  ngOnInit() {

    this.initPromise();
    this.initAsync1();
    this.initAsync();
  }
  arrayDelay = [
    {
      "Date": "2019-07-04",
      "Symbol": "BTCUSD",
      "Open": 11976.42,
      "High": 12064.26,
      "Low": 11820,
      "Close": 11909.55,
      "Volume BTC": 1237.57,
      "Volume USD": 14790355.69
    },
    {
      "Date": "2019-07-03",
      "Symbol": "BTCUSD",
      "Open": 10829.18,
      "High": 12014.6,
      "Low": 10829.18,
      "Close": 11976.42,
      "Volume BTC": 36836.85,
      "Volume USD": 419076229.34
    },
    {
      "Date": "2019-07-02",
      "Symbol": "BTCUSD",
      "Open": 10577.63,
      "High": 10925,
      "Low": 9651,
      "Close": 10829.18,
      "Volume BTC": 41476.42,
      "Volume USD": 424791613.92
    },
    {
      "Date": "2019-07-01",
      "Symbol": "BTCUSD",
      "Open": 10761.26,
      "High": 11210.52,
      "Low": 9953,
      "Close": 10577.63,
      "Volume BTC": 37633.9,
      "Volume USD": 396857365.17
    },
    {
      "Date": "2019-06-30",
      "Symbol": "BTCUSD",
      "Open": 11865.29,
      "High": 12200,
      "Low": 10650.06,
      "Close": 10761.26,
      "Volume BTC": 26505.91,
      "Volume USD": 300275703.17
    },
    {
      "Date": "2019-06-29",
      "Symbol": "BTCUSD",
      "Open": 12360.45,
      "High": 12379.99,
      "Low": 11318.94,
      "Close": 11865.29,
      "Volume BTC": 27300.42,
      "Volume USD": 323053833.66
    }
  ];
  afterTheDelay = function () {
    console.log("afterTheDelay");
    let outputPromise = "";
    this.arrayDelay.forEach((arrayDelay, index) => {
      outputPromise += `<div>Date: ${arrayDelay.Date} <br />Symbol:  ${arrayDelay.Symbol}<br /> Open: ${arrayDelay.Open} <br />Close: ${arrayDelay.Close}<hr></div>`;
    });
    document.getElementById("promises").innerHTML = "<strong>Historical Bitcoin:</strong><br />" + outputPromise;
  }

  addPromise = function (price) {
    console.log("addPromise");
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      this.arrayDelay.push(price);
      // const error = true;
      const error = false;
      if (!error) {
        resolve();
      } else {

        reject(console.log("%c Promise Errorrr occured", "color:orange; border:solid 1px orange"));
      }
      // }, 2000);
    });
  }


  initAsync = async function () {
    console.log("initAsync");
    await this.addPromise({
      "Date": "2020-01-01",
      "Symbol": "BTC",
      "Open": 13000.00,
      "High": 14000,
      "Low": 12000.00,
      "Close": 1350.00
    })
      .then(this.afterTheDelay)
      .catch(err => console.log(err));
    this.afterTheDelay();
  }



  promise1 = Promise.resolve("Price 1");
  promise2 = 10;
  promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, "Timeout-2000ms")
  );
  promise4 = fetch(
    "https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json"
  ).then(res => res.json());

  initPromise = async function () {
    Promise.all([this.promise1, this.promise2, this.promise3, this.promise4]).then(_values =>
      console.log(_values)
    );
    Promise.all([this.promise1, this.promise2, this.promise3, this.promise4]).then(
      values =>
        
      (document.getElementById("promiseAll").innerHTML =
          "<strong>API: https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json> </strong><br />   Date: " + values[3][1].Date + ' Symbol:' + values[3][1].Symbol + ' Close: ' + values[3][1].Close)
    );

  }

  initAsync1 = async function () {
    await this.addPromise({
      "Date": "2020-01-02",
      "Symbol": "coinASYNCAdded",
      "Open": 13000.00,
      "High": 14000,
      "Low": 12000.00,
      "Close": 1350.00
    });
    this.afterTheDelay();
  }

}
