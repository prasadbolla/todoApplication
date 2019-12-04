import { Component, OnInit } from '@angular/core';
import { EditTodoService } from '../service/todoDataApi/edit-todo.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTodoService } from '../service/todoDataApi/create-todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
id: number
todo: Todo
isAddAction: boolean
successfullEditMessage: string
successfullCreateMessage: string
  constructor(private editTodoService: EditTodoService,
    private route: ActivatedRoute,
    private createTodoService: CreateTodoService,
    private router:Router) { }
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',new Date(),'','',false);
  }

  saveTodo(){
    this.todo.status='NO';
    this.todo.username=sessionStorage.getItem('authenticateUser');
    this.createTodoService.createTodo(sessionStorage.getItem('authenticateUser'),this.todo).subscribe(
    data =>{  
      this.successfullCreateMessage=`Successfully created new todo for Description 
      ${this.todo.description}`
      this.router.navigate(['listtodos'])
  }
    )

}
}
