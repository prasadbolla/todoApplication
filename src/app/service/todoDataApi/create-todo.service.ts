import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from 'src/app/list-todos/list-todos.component';
import { BACKEND_URL } from 'src/app/app.contstants';

@Injectable({
  providedIn: 'root'
})
export class CreateTodoService {

  constructor(private http:HttpClient) { }

  createTodo(username, todo: Todo){
   
    return this.http.post(`${BACKEND_URL}/users/${username}/todos/todo`
    ,todo)
  }
}
