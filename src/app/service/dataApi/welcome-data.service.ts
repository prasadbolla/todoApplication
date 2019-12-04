import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
export class MessageBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

}
