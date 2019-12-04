import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BACKEND_URL } from 'src/app/app.contstants';
@Injectable({
  providedIn: 'root'
})
export class DeleteTodoService {

  constructor(private http:HttpClient) { }

  deleteTodo(username, id){
    return this.http.delete(`${BACKEND_URL}/users/${username}/todos/${id}`)
  }
}
