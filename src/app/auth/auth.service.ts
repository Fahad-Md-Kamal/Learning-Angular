import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';


export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({providedIn: 'root'})
export class AuthService {

  user = new Subject<User>();

  constructor( private http: HttpClient ) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDix76-c2I2ySpaGPlYApIGiE2Tq0PPQDM', {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
          resData.email, 
          resData.localId, 
          resData.idToken, 
          +resData.expiresIn)}
        )
    );
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDix76-c2I2ySpaGPlYApIGiE2Tq0PPQDM', {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
          resData.email, 
          resData.localId, 
          resData.idToken, 
          +resData.expiresIn)}
        )
      );
  }

  private handleAuthentication(
      email: string, 
      userId: string, 
      token: string, 
      expiresIn: number) {
      const expirationDate = new Date( new Date().getTime() + expiresIn * 1000 );
      const user = new User(email,userId,token, expirationDate);
      this.user.next(user);
  }



  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This is not a registared user';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user is disabled';
        break;

    }
    return throwError(errorMessage);
  }

}
