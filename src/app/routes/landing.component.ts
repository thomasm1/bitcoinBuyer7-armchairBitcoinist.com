import { Component, OnInit } from '@angular/core'; 
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User { name: string; }

@Component({
  selector: 'app-landing',
  template: `
  <div class="landing">  
  <p>Firebase DB: User List</p>
    <div class="firebase">
        <pre class="text" *ngFor="let user of users | async">
            {{user | json }}<br /> 
        </pre>
    </div>
  </div> 

  `,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  users: Observable<any[]>;

  constructor(  
    db: AngularFirestore
    ) { 
    
      this.users = db.collection('users').valueChanges();
}

  ngOnInit() {
  }

}
