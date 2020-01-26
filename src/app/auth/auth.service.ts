import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService {

  constructor( private http: HttpClient ) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDix76-c2I2ySpaGPlYApIGiE2Tq0PPQDM', {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
