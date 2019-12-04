import { Injectable } from '@angular/core';
import {TodoDataApiResponse } from 'src/app/list-todos/list-todos.component';
import {HttpClient} from '@angular/common/http'
import { BACKEND_URL } from 'src/app/app.contstants';

@Injectable({
  providedIn: 'root'
})
export class RetreiveTodoService {

  constructor(private http:HttpClient) { }
  retrieveTodos(username){
    return this.http.get<TodoDataApiResponse>(`${BACKEND_URL}/users/${username}/todos`)
  }
}
