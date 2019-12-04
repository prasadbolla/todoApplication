import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';

//Routing details. Page Navigation
const routes: Routes = [
  {path:'', component: LoginpageComponent},
  {path:'loginpage', component: LoginpageComponent},
  {path:'welcomepage/:name', component:WelcomepageComponent, canActivate:[RouteGuardService]},
  {path:'listtodos',component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path: 'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path: 'create-todos/:id', component:CreateTodoComponent,canActivate:[RouteGuardService]},
  {path: 'viewtodo/:id', component:ViewtodoComponent,canActivate:[RouteGuardService]},
  {path: 'edit-todo/:id', component:EdittodoComponent,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorhandlingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
