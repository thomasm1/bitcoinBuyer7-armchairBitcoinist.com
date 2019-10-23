import { Injectable } from '@angular/core';
import { Price } from '../models/price.model';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/delay'; 
import { catchError } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

//import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class LambdaPriceService {
  prices: Price[];

  constructor(private http: HttpClient) { }
  
  coinCode = 'jdkxd2ny04';
  qualifier = 'prod';
  //baseUrl = `https://${this.coinCode}.execute-api.us-east-1.amazonaws.com/${this.qualifier}/thomasMiltonFunction`; 
  baseUrl = 'http://localhost:3000/price';

// vurl = "https://jdkxd2ny04.execute-api.us-east-1.amazonaws.com/prod/thomasMiltonFunction" 
// vurl = "https://o8fasqpzp4.execute-api.us-east-1.amazonaws.com/prod/ThomasMiltonServerless" 
// vurl = "https://ebdfwshgh4.execute-api.us-east-1.amazonaws.com/default/lambdaLitecoin"

  private listPrices: Price[] = //  
    [
         {
   "Date": "2019-10-17",
   "Symbol": "BTCUSD",
   "Open": 7993.54,
   "High": 8070,
   "Low": 7937.01,
   "Close": 8034.32,
   "VolumeBTC": 1570.08,
   "VolumeUSD": 12537245.82
 },
 {
   "Date": "2019-10-16",
   "Symbol": "BTCUSD",
   "Open": 8162.44,
   "High": 8171.59,
   "Low": 7908.86,
   "Close": 7993.54,
   "VolumeBTC": 8123.72,
   "VolumeUSD": 65132771.81
 },
 {
   "Date": "2019-10-15",
   "Symbol": "BTCUSD",
   "Open": 8355,
   "High": 8420,
   "Low": 8085.65,
   "Close": 8162.44,
   "VolumeBTC": 7919.56,
   "VolumeUSD": 65109952.98
 },
 {
   "Date": "2019-10-14",
   "Symbol": "BTCUSD",
   "Open": 8282.97,
   "High": 8409,
   "Low": 8215.66,
   "Close": 8355,
   "VolumeBTC": 4401.82,
   "VolumeUSD": 36575829.05
 },
 {
   "Date": "2019-10-13",
   "Symbol": "BTCUSD",
   "Open": 8309.03,
   "High": 8469.02,
   "Low": 8146.47,
   "Close": 8282.97,
   "VolumeBTC": 5459.53,
   "VolumeUSD": 45492326.33
 },
 {
   "Date": "2019-10-12",
   "Symbol": "BTCUSD",
   "Open": 8267.33,
   "High": 8425,
   "Low": 8261.46,
   "Close": 8309.03,
   "VolumeBTC": 3001.53,
   "VolumeUSD": 25023584.91
 },
 {
   "Date": "2019-10-11",
   "Symbol": "BTCUSD",
   "Open": 8587.5,
   "High": 8826,
   "Low": 8226,
   "Close": 8267.33,
   "VolumeBTC": 11975.39,
   "VolumeUSD": 101238415.25
 },
 {
   "Date": "2019-10-10",
   "Symbol": "BTCUSD",
   "Open": 8590,
   "High": 8660,
   "Low": 8452.5,
   "Close": 8587.5,
   "VolumeBTC": 7892.41,
   "VolumeUSD": 67531649.6
 },
 {
   "Date": "2019-10-09",
   "Symbol": "BTCUSD",
   "Open": 8180,
   "High": 8709,
   "Low": 8121,
   "Close": 8590,
   "VolumeBTC": 13865.37,
   "VolumeUSD": 117143751.99
 },
 {
   "Date": "2019-10-08",
   "Symbol": "BTCUSD",
   "Open": 8209,
   "High": 8342.97,
   "Low": 8107.26,
   "Close": 8180,
   "VolumeBTC": 5808.84,
   "VolumeUSD": 47674867.98
 },
 {
   "Date": "2019-10-07",
   "Symbol": "BTCUSD",
   "Open": 7859.79,
   "High": 8310.57,
   "Low": 7762.35,
   "Close": 8209,
   "VolumeBTC": 9969.38,
   "VolumeUSD": 80691163.82
 },
 {
   "Date": "2019-10-06",
   "Symbol": "BTCUSD",
   "Open": 8147.63,
   "High": 8176.18,
   "Low": 7780.85,
   "Close": 7859.79,
   "VolumeBTC": 7770.16,
   "VolumeUSD": 61753052.16
 },
 {
   "Date": "2019-10-05",
   "Symbol": "BTCUSD",
   "Open": 8156.67,
   "High": 8200,
   "Low": 8020.2,
   "Close": 8147.63,
   "VolumeBTC": 3809.86,
   "VolumeUSD": 30873507.65
 },
 {
   "Date": "2019-10-04",
   "Symbol": "BTCUSD",
   "Open": 8240.41,
   "High": 8241.35,
   "Low": 8002.21,
   "Close": 8156.67,
   "VolumeBTC": 7620.06,
   "VolumeUSD": 62078561.3
 },
 {
   "Date": "2019-10-03",
   "Symbol": "BTCUSD",
   "Open": 8381.72,
   "High": 8419.95,
   "Low": 8059.22,
   "Close": 8240.41,
   "VolumeBTC": 7550.73,
   "VolumeUSD": 62037926.73
 }
    ];

    getPrices(): Price[] {
    return this.listPrices;
    }
  //   getPrices() { // : Price[]
  //     return this.http.get(this.baseUrl); 
  // //     .pipe(catchError(this.handleError));
  //   }

  //   getPrices(): Observable<Price[]> {
  //   return Observable.of(this.listPrices);
  // }

  // getPrices(): Observable<Price[]> {
  //   return this.httpClient.get<Price[]>(this.baseUrl)
  //     .pipe(catchError(this.handleError));
  // }

  // private handleError(errorResponse: HttpErrorResponse) {
  //   if (errorResponse.error instanceof ErrorEvent) {
  //     console.error('Client Side Error: ', errorResponse.error.message)
  //   } else {
  //     console.error('Server Side Error: ', errorResponse);
  //   }
  //   return new ErrorObservable('Oops, there is a problem with theCrypto-Prices service ... IT is notified & working on it. Please try again later, thanks!')
  // }

  // getPrice(id: number): Observable<Price> {
  //   // return this.listPrices.find(u => u.id === id)
  //   return this.httpClient.get<Price>(`${this.baseUrl}/${id}`) 
  //     .pipe(catchError(this.handleError));
  // }
  
}

