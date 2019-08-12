import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next,state): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
        alert('Oops! Access Denied. Please sign-in with Google or register for access :-)');
        this.router.navigate(['/']);
        }
      })
    );

  }
  
}
