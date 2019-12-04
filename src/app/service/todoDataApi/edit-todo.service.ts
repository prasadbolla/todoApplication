import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from 'src/app/list-todos/list-todos.component';
import { BACKEND_URL } from 'src/app/app.contstants';

@Injectable({
  providedIn: 'root'
})
export class EditTodoService {

  constructor(private http:HttpClient) { }
  editTodo(username, id){
    return this.http.get<Todo>(`${BACKEND_URL}/users/${username}/todos/${id}`)
  }
  updateTodo(username,id,todo){
    return this.http.put<Todo>(`${BACKEND_URL}/users/${username}/todos/${id}`
    ,todo)
  }
}
