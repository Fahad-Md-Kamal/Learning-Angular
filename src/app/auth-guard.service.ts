import { CanActivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
 
    constructor (private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
        }
    
    canActivateChild(route: ActivatedRouteSnapshot, 
                    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate (route, state);
        }

}




// canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
//     throw new Error("Method not implemented.");
// }