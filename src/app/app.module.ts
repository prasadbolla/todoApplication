import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { TodomenubarComponent } from './todomenubar/todomenubar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { AuthenticationService } from './service/security/authentication.service';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    WelcomepageComponent,
    ErrorhandlingComponent,
    ListTodosComponent,
    TodomenubarComponent,
    FooterComponent,
    LogoutComponent,
    CreateTodoComponent,
    ViewtodoComponent,
    EdittodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
