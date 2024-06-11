import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpService: HttpClient) {}
  token = null;
  url = 'http://localhost:8000/auth/';
  register(email: string, password: string) {
    return this.httpService.post(this.url + 'register', { email, password });
  }

  public isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService();
    if (this.token === null) return false;
    return !jwtHelper.isTokenExpired(this.token);
  }
}
