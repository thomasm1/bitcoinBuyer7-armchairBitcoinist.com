import { Injectable } from '@angular/core'; 
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserFirestore } from '../models/user-firestore.model';
// import { UserService } from './user.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<UserFirestore>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<UserFirestore>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }
///  id, name, email, isActive, phone, dateOfBirth, photoPath, groupName, userGroup
  private updateUserData({  uid,   }: UserFirestore) {
    const userRef: AngularFirestoreDocument<UserFirestore> = this.afs.doc(`users/${uid}`);

    const data = {
      uid, 
      // id,
      // name,
      // email,
      // isActive, 
      // phone, 
      // dateOfBirth,
      // photoPath, 
      // groupName, 
      // userGroup
    };
    return userRef.set(data, { merge: true });
  }
}
