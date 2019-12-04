import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-aut-service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 username="user";
 password="password";
 errorMessage="Invalid Credentials"
 invalidLogin=false
 //Instance Of Routers using Dependency Injection
  constructor(private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleBasicAuth(){
    this.basicAuthenticationService.executeBasicAuthentication(this.username,this.password)
    .subscribe(
      data => {
        this.router.navigate(['welcomepage', this.username])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )
}
}
