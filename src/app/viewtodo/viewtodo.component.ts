import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditTodoService } from '../service/todoDataApi/edit-todo.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit {
  todo: Todo
  id
  constructor(private router:Router,
    private editTodoService: EditTodoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',new Date(),'','',false);
    if(this.id !=-1){
    this.editTodoService.editTodo(sessionStorage.getItem('authenticateUser'),this.id).subscribe(
      data => this.todo=data
    )
  }
  }
  backtoListTodos(){
      this.router.navigate(['listtodos'])
  }
}
