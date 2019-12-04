import { Component, OnInit } from '@angular/core';
import { RetreiveTodoService } from '../service/todoDataApi/retreive-todo.service';
import { DeleteTodoService } from '../service/todoDataApi/delete-todo.service';
import { Router } from '@angular/router';
import { MarktodoService } from '../service/marktodo.service';

export class TodoDataApiResponse{
  constructor(public todos: Todo[]){}
}
export class Todo{
  constructor(public id: number,
    public description: string,
    public targetDate: Date,
    public status: string,
    public username: string,
    public checked: boolean){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  deleteConfirmation: string
  markConfirmationMessage: string
  successfullEditMessage:string
  successfullCreateMessage:string
  constructor(private retreiveTodoService:RetreiveTodoService,
    private deleteTodoService:DeleteTodoService,
    private router:Router,
    private markTodoService:MarktodoService) { }

  ngOnInit() {
this.retreieveTodoInfo();

  }
  
  retreieveTodoInfo(){
  this.retreiveTodoService.retrieveTodos(sessionStorage.getItem('authenticateUser')).subscribe(
    response => {
      this.todos=response.todos}
  )
}
  deleteTodo(todoItem){
    return this.deleteTodoService.deleteTodo(sessionStorage.getItem('authenticateUser'), todoItem.id).subscribe(
      response =>{
      this.deleteConfirmation=`Todo item "${todoItem.description}" successfully deleted`;
      this.retreieveTodoInfo();
    }
    )
}

markTodo(todoItem){
  this.deleteConfirmation=''
  return this.markTodoService.markTodos(sessionStorage.getItem('authenticateUser'), todoItem).subscribe(
    response =>{
    this.markConfirmationMessage=`Todo item "${todoItem.description}" successfully Marked`;
    this.retreieveTodoInfo();
  }
  )
}

editTodo(todoItem){
  
  this.router.navigate(['edit-todo',todoItem.id])
}

viewTodo(todoItem){
  this.router.navigate(['viewtodo',todoItem.id])
}

isChecked(status){
  console.log(status)
  return !(status === 'YES')
}
addTodo(){
  this.router.navigate(['create-todos',-1])
}
}
