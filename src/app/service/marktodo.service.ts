import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from '../list-todos/list-todos.component';
import { BACKEND_URL } from 'src/app/app.contstants';
@Injectable({
  providedIn: 'root'
})
export class MarktodoService {
  markTodo: string
  constructor(private http:HttpClient) { }

  markTodos(username, todoItem:Todo){
    return this.http.patch(`${BACKEND_URL}/users/${username}/todos/${todoItem.id}`, todoItem)
  }
}
