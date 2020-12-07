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
        "id": 9928386,
        "unix": 1606694400,
        "date": "2020-11-30 00:00:00",
        "symbol": "BTC/USD",
        "open": 18202.02,
        "high": 19873.23,
        "low": 18201.47,
        "close": 19713.94,
        "volto": 27293.4791942,
        "volfrom": 538062011.2257072
      },
      {
        "id": 9928387,
        "unix": 1606608000,
        "date": "2020-11-29 00:00:00",
        "symbol": "BTC/USD",
        "open": 17736.1,
        "high": 18359,
        "low": 17535.26,
        "close": 18202.04,
        "volto": 8932.25029132,
        "volfrom": 162585177.09261832
      },
      {
        "id": 9928388,
        "unix": 1606521600,
        "date": "2020-11-28 00:00:00",
        "symbol": "BTC/USD",
        "open": 17155.43,
        "high": 17933.25,
        "low": 16880,
        "close": 17739.85,
        "volto": 13157.9519653,
        "volfrom": 233420094.1716272
      },
      {
        "id": 9928389,
        "unix": 1606435200,
        "date": "2020-11-27 00:00:00",
        "symbol": "BTC/USD",
        "open": 17169.99,
        "high": 17475,
        "low": 16400,
        "close": 17153.95,
        "volto": 23333.98429789,
        "volfrom": 400269999.9467902
      },
      {
        "id": 9928390,
        "unix": 1606348800,
        "date": "2020-11-26 00:00:00",
        "symbol": "BTC/USD",
        "open": 18717.24,
        "high": 18915.48,
        "low": 16200,
        "close": 17170,
        "volto": 48644.17078197,
        "volfrom": 835220412.326425
      },
      {
        "id": 9928391,
        "unix": 1606262400,
        "date": "2020-11-25 00:00:00",
        "symbol": "BTC/USD",
        "open": 19172.9,
        "high": 19500,
        "low": 18502,
        "close": 18721.93,
        "volto": 20485.39373121,
        "volfrom": 383526107.4581524
      },
      {
        "id": 9928392,
        "unix": 1606176000,
        "date": "2020-11-24 00:00:00",
        "symbol": "BTC/USD",
        "open": 18384.82,
        "high": 19469,
        "low": 18052.02,
        "close": 19172.84,
        "volto": 26623.09452709,
        "volfrom": 510440331.6727723
      },
      {
        "id": 9928393,
        "unix": 1606089600,
        "date": "2020-11-23 00:00:00",
        "symbol": "BTC/USD",
        "open": 18437.18,
        "high": 18777.77,
        "low": 18001,
        "close": 18384.82,
        "volto": 17655.66362172,
        "volfrom": 324596197.66587025
      },
      {
        "id": 9928394,
        "unix": 1606003200,
        "date": "2020-11-22 00:00:00",
        "symbol": "BTC/USD",
        "open": 18721.21,
        "high": 18773.56,
        "low": 17610.77,
        "close": 18437.66,
        "volto": 15423.83816127,
        "volfrom": 284379483.9125214
      },
      {
        "id": 9928395,
        "unix": 1605916800,
        "date": "2020-11-21 00:00:00",
        "symbol": "BTC/USD",
        "open": 18677.84,
        "high": 18980,
        "low": 18350,
        "close": 18721.21,
        "volto": 13604.27139959,
        "volfrom": 254688421.76871827
      },
      {
        "id": 9928396,
        "unix": 1605830400,
        "date": "2020-11-20 00:00:00",
        "symbol": "BTC/USD",
        "open": 17821.92,
        "high": 18830.3,
        "low": 17764.76,
        "close": 18675.25,
        "volto": 17901.931678,
        "volfrom": 334323049.5695695
      },
      {
        "id": 9928397,
        "unix": 1605744000,
        "date": "2020-11-19 00:00:00",
        "symbol": "BTC/USD",
        "open": 17790.18,
        "high": 18193.29,
        "low": 17356,
        "close": 17821.58,
        "volto": 17141.49267548,
        "volfrom": 305488483.03548086
      },
      {
        "id": 9928398,
        "unix": 1605657600,
        "date": "2020-11-18 00:00:00",
        "symbol": "BTC/USD",
        "open": 17679.86,
        "high": 18488,
        "low": 17205.02,
        "close": 17782.91,
        "volto": 32425.98660226,
        "volfrom": 576628401.4091954
      },
      {
        "id": 9928399,
        "unix": 1605571200,
        "date": "2020-11-17 00:00:00",
        "symbol": "BTC/USD",
        "open": 16726.49,
        "high": 17880,
        "low": 16575.42,
        "close": 17679.36,
        "volto": 25230.22403641,
        "volfrom": 446054213.62034553
      },
      {
        "id": 9928400,
        "unix": 1605484800,
        "date": "2020-11-16 00:00:00",
        "symbol": "BTC/USD",
        "open": 15970,
        "high": 16892,
        "low": 15879,
        "close": 16726.64,
        "volto": 13948.30524238,
        "volfrom": 233308280.399403
      },
      {
        "id": 9928401,
        "unix": 1605398400,
        "date": "2020-11-15 00:00:00",
        "symbol": "BTC/USD",
        "open": 16082.01,
        "high": 16175.6,
        "low": 15796.09,
        "close": 15966.89,
        "volto": 6250.07966791,
        "volfrom": 99794334.5487555
      },
      {
        "id": 9928402,
        "unix": 1605312000,
        "date": "2020-11-14 00:00:00",
        "symbol": "BTC/USD",
        "open": 16339.56,
        "high": 16339.6,
        "low": 15708.24,
        "close": 16082.01,
        "volto": 9205.916488,
        "volfrom": 148049641.0191809
      },
      {
        "id": 9928403,
        "unix": 1605225600,
        "date": "2020-11-13 00:00:00",
        "symbol": "BTC/USD",
        "open": 16310.81,
        "high": 16491.92,
        "low": 15975,
        "close": 16339.56,
        "volto": 14593.51518544,
        "volfrom": 238451616.98340797
      },
      {
        "id": 9928404,
        "unix": 1605139200,
        "date": "2020-11-12 00:00:00",
        "symbol": "BTC/USD",
        "open": 15705.79,
        "high": 16370.89,
        "low": 15446.82,
        "close": 16310.81,
        "volto": 22153.73849401,
        "volfrom": 361345419.3654832
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

