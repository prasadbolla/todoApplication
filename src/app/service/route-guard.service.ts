import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BasicAuthenticationService } from './basic-aut-service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  constructor(private authentication: BasicAuthenticationService,
    private pageRoute:Router) { }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authentication.isUserLoggedIn()){
    return true;
  }
  this.pageRoute.navigate(['loginpage'])
  return false;
  }
}
