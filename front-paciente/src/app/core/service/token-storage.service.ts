import { Injectable } from '@angular/core';
import { PacienteDTO } from '../dto/paciente.dto';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveRefreshToken(token: string): void {
    localStorage.removeItem(REFRESHTOKEN_KEY);
    localStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(REFRESHTOKEN_KEY);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, "Bearer ".concat(token));
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user) as PacienteDTO;
    }
    return null;
  }
}