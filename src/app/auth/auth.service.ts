import {Subject, from} from 'rxjs';
import { User } from "./user.model";
import {Router} from "@angular/router";
import { AuthData } from "./auth-data.model";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;

    constructor (private router: Router) {}

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authSuccess();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authSuccess();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null
    }

    authSuccess() {
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}