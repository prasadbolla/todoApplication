import { Injectable } from '@angular/core' ;
import {HttpClient, HttpHeaders} from '@angular/common/http'
import{map} from 'rxjs/operators';
import { BACKEND_URL } from 'src/app/app.contstants';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient:HttpClient) { }

  executeBasicAuthentication(username, password){
    let basicAuthInfo= 'Basic '+ window.btoa(username+ ':'+password)
    let headers=new HttpHeaders({
      Authorization: basicAuthInfo
    })
   return this.httpClient.get<AuthenticationBean>(
     `${BACKEND_URL}/basicAuth`, {headers})
     .pipe(map(
       data =>{
         sessionStorage.setItem('authenticateUser', username);
         sessionStorage.setItem('authenticateToken', basicAuthInfo);
         return data;
       }));
  }
     
  getAuthUser(){
    return sessionStorage.getItem('authenticateUser');
  }
  getToken(){
    if(this.getAuthUser())
    return sessionStorage.getItem('authenticateToken');
  }
  logout(){
    sessionStorage.removeItem('authenticateUser')
    sessionStorage.removeItem('authenticateToken')
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }
}
export class AuthenticationBean{
  constructor(public message:string){}
}