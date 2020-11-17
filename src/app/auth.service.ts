import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?

  // Connexion
  login(name: string, password: string): Observable<boolean> {
    // Faire appel au service d'authentification...
    const isLoggedIn = (name === 'admin' && password === 'admin');

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isLoggedIn)
    );
  }

  // Déconnexion
  logout(): void {
    this.isLoggedIn = false;
  }

}

