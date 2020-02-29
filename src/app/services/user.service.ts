import { Injectable } from '@angular/core';
import { UserFirestore } from '../models/user-firestore.model';
import { User } from '../models/user.model';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/delay';   
// import { HttpClient } from '@angular/common/http'; 
 import {map, catchError} from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
// import 'rxjs/add/observable/of' from 'rxjs'; 
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/delay';  
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { ErrorObservable } from 'rxjs/observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl: string;
  private newId: number;
  private listUsers: User[] = []; 
  private listUsersFirestore: UserFirestore[] = []; 



  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.aws_url; // AWS ENDPOINT: 
  this.getUsers().subscribe(
                data => {
                  this.listUsers = data;
                },
                error => {
                     console.log(error);
                });
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
         .pipe(
        catchError(e => throwError(e))
      );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('Oops, there is a problem with the service ... IT is notified & working on it. Please try again later, thanks!')
  }

  getUser(id: number): Observable<User> {
    // return this.listUsers.find(u => u.id === id)
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`)
      .pipe( catchError(e => throwError(e)));
  }

  register(user: User): Observable<User> {
    this.newId = this.listUsers.length +1;
    console.log(this.newId);
    return this.httpClient.post<User>(`${this.baseUrl}/${this.newId}`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
         .pipe(
        catchError(e => throwError(e))
      );
    // if (user.id === null) {
    // const maxId = this.listUsers.reduce(function (u1, u2) {
    //   return (u1.id > u2.id) ? u1 : u2;
    // }).id
    // user.id = maxId + 1;
    // this.listUsers.push(user);
    // } else {
    //   const foundIdx = this.listUsers.findIndex(u => u.id === user.id);
    //   this.listUsers[foundIdx] = user;
    // }
  }

  updateUser(user: User): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${user.id}`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(e => throwError(e)));
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
         .pipe(
        catchError(e => throwError(e))
      );
    // const i = this.listUsers.findIndex(u => u.id === id);
    // if (i !== -1) {
    //   this.listUsers.splice(i, 1); 
  }

  private listUsersUserFirestore: UserFirestore[] =
    [
      {
        "id": 1,
        "uid": "PW3r1iqZzOWJaMfuzyjTDCckCnn1",
        "userId": "3",
        "name": 'Tom',
        "email": 'thomasm1.maestas@gmail.com',
        "phone": 5055087707,
        "contactType": 'email',
        "userGroup": '5',
        "dateOfBirth": new Date('2020-09-03'),
        "isActive": true,
        "photoPath": 'assets/images/a.png'
      }, {
        "id": 2,
        "uid": "PW3r1iqZzOWJaMfuzyjTDCckCnnt",
        "name": 'Tom22',
        "email": 'thomasm1222.maestas@gmail.com',
        "phone": 5222227707,
        "contactType": 'email',
        "userGroup": '5',
        "dateOfBirth": new Date('2020-09-03'),
        "isActive": true,
        "photoPath": 'assets/images/a.png'
      }
    ];


  getUsersFirestore(): UserFirestore[] {
    return this.listUsers;
  }

  // getUsers(): Observable<User[]> {
  //   return this.httpClient.get<User[]>('http://localhost:3000/users')
  // } 
  
    // getUsers(): Observable<User[]> {
  //   return Observable.of(this.listUsers);
  // }

  // getUser(id: number)  {
  //  return this.listUsers.find(u => u.id === id)
  // }

  // getUser(id: number): User {
  //   return this.listUsers.find(u => u.id === id)
  // }


  save(user: UserFirestore) {
    if (user.id === null) {
      const maxId = this.listUsers.reduce(function (u1, u2) {
        return (u1.id > u2.id) ? u1 : u2;
      }).id
      user.id = maxId + 1;
      this.listUsersFirestore.push(user);
    } else {
      const foundIdx = this.listUsers.findIndex(u => u.id === user.id);
      this.listUsersFirestore[foundIdx] = user;
    } 
  } 
  
// TODO :DELETE: Needs administaration guard:::: TODO
// deleteUser(id: number) {
//     const i = this.listUsers.findIndex(u => u.id === id);
//     if (i !== -1) {
//       this.listUsers.splice(i, 1);
//     }
//   }
}
