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
   Date: "2019-10-17",
   Symbol: "BTCUSD",
   Open: 7993.54,
   High: 8070,
   Low: 7937.01,
   Close: 8034.32,
   VolumeBTC: 1570.08,
   VolumeUSD: 12537245.82
 },
 {
   Date: "2019-10-16",
   Symbol: "BTCUSD",
   Open: 8162.44,
   High: 8171.59,
   Low: 7908.86,
   Close: 7993.54,
   VolumeBTC: 8123.72,
   VolumeUSD: 65132771.81
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

