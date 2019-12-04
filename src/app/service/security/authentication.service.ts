import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username='user'
    let password='password'
    let basicAuthInfo= 'Basic '+ window.btoa(username+ ':'+password)
    req = req.clone({
      setHeaders:{
        Authorization: basicAuthInfo
      }
    })
    return next.handle(req);
  }
}
