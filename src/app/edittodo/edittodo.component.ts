import { Component, OnInit } from '@angular/core';
import { EditTodoService } from '../service/todoDataApi/edit-todo.service';
import { Todo } from '../list-todos/list-todos.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  id: number
  todo: Todo
  isAddAction: boolean
  successfullEditMessage: string
  successfullCreateMessage: string
  constructor(private editTodoService: EditTodoService,
    private router:Router,
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
  updateTodos(){
    this.editTodoService.updateTodo(sessionStorage.getItem('authenticateUser'),this.id,this.todo)
    .subscribe(
      data =>{
      this.successfullEditMessage=`Modification attempted for Description ${data.description}`
      this.router.navigate(['listtodos'])
      } 
    )
}
}
