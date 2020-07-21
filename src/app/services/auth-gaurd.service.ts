import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate,CanActivateChild {

  constructor(private router:Router) { }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
    try {
      let usrObjStr = localStorage.getItem("token");
      let usrObj = JSON.parse(usrObjStr);
      if(!!usrObj) {
        return true
      } else {
        this.router.navigateByUrl("/auth/login");
        return false;
      }
    } catch(ex) {
      return false;
    }
  }
  canActivateChild(next:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    return this.canActivate(next,state)
  }
}
