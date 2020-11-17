import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message = 'Vous êtes déconnecté.';
  name: string;
  password: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  setMessage() {
    this.message = this.authService.isLoggedIn ? 'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect';
  }

  // Connecte l'utilisateur auprès du guard
  login() {
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définie, redirige l'utilisateur vers la liste des pokémons
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
        // redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }



}
