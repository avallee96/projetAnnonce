import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router) { }  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn()) {      
        return true;      
        }      
        // navigate to login page as user is not authenticated      
            this.router.navigate(['/connexion']);      
         return false;      
  }      
  public isLoggedIn(): boolean {      
     let status = false;      
     if (sessionStorage.getItem('user')) {      
        status = true;      
     }
       else {      
        status = false;      
        }      
     return status;      
  }    
}
  
