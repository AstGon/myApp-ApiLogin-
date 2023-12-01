import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/data.service';
import { Observable } from 'rxjs';

interface User {
  nombre: string;
  password: string;
  email: string;
  tipo: string;
  materias?: any[];
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  foundUser: any;
  user = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  login() {
    console.log('Iniciando sesión con:', this.user.email, this.user.password);

    this.apiService.getUsers().subscribe(
      (response: any) => {
        console.log('Respuesta de la API:', response);
        const users: User[] = response.usuarios;

        const foundUser = users.find((u: User) => u.email === this.user.email);

        if (foundUser && foundUser.password === this.user.password) {
          this.handleLoginSuccess(foundUser);
        } else {
          this.handleLoginFailure();
        }
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
        this.errorMessage = 'Error al obtener usuarios';
      }
    );
  }

  private handleLoginSuccess(user: User) {
    console.log('Tipo de usuario:', user.tipo);

    if (user.tipo === 'profesor') {
      this.navigateTo('/menuprof', {
        nombre: user.nombre,
        correoElectronico: user.email,
        materias: user.materias || [],
      });
    } else if (user.tipo === 'alumno') {
      this.navigateTo('/scanner', {
        nombre: user.nombre,
        correoElectronico: user.email,
      });
    }
  }

  private handleLoginFailure() {
    this.errorMessage = 'Credenciales incorrectas';
  }

  private navigateTo(route: string, queryParams: any = {}) {
    this.router.navigate([route], { queryParams });
  }
}
