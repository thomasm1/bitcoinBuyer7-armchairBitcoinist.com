import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private listUsers: User[] =
    [
      {
        "id": 1,
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

  getUsers(): User[] {
    return this.listUsers;
  }

  getUser(id: number)  {
   return this.listUsers.find(u => u.id === id)
  }
}
