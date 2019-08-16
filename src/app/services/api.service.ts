import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../models/api.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apisUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  // apisUrl:string =  'https://tmm-nov.s3.amazonaws.com/data/apis/may19.json';
  apisLimit = '?_limit=5';

  constructor(private http: HttpClient) { } 

  // Update server-side
  toggleSelected(api: Api): Observable<any> {
    const url = `${this.apisUrl}/${api.id}`;
    return this.http.put(url, api, httpOptions);
  } 
  // Get server-side
    getApis(): Observable<Api[]> {
      return this.http.get<Api[]>(`${this.apisUrl}${this.apisLimit}`);
      // return [
      //   {
      //     id: 1,
      //     author: 'Thomas Maestas',
      //     date: 'May 8, 2019',
      //     cat3: 'Musing Blockchain',
      //     title: 'Api One',
      //     selected: false
      //   } 
      // ]
    } 
  //Delete server-side
  deleteApi(api:Api):Observable<Api> {
    const url = `${this.apisUrl}/${api.id}`;
    return this.http.delete<Api>(url, httpOptions);
  }
  //Add server-side
  addApi(api:Api):Observable<Api> {
    return this.http.post<Api>(this.apisUrl, api, httpOptions);
  }

}
