import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

// export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  // items: Observable<any[]>;
  showLoadingIndicator = true;

  constructor(
    private _router: Router, 
    // db: AngularFirestore
    ) {
    
      // this.items = db.collection('items').valueChanges();

      this._router.events.subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.showLoadingIndicator = true;
        }
        if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
          this.showLoadingIndicator = false;
        }
      });
      
      const array = [1, 2, 3];
      console.log(array);
  }
}
