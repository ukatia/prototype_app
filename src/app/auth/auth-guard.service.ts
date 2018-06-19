import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
///import { AuthService } from './auth.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthGuard implements CanActivate {
  
    constructor(private router: Router) {}

    canActivate() {
        if (window.localStorage.getItem('login') == 'true' ) {
            return true;
        }
        else {
            this.router.navigate(['/login'])
        }
    }
}
        
     