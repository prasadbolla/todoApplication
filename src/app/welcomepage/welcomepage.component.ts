import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  name=''
  welcomeMessage =''
  errorServiceMessage=''
  //ActivatedRoute
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log('prasad')
    console.log(this.name)
   this.name=this.route.snapshot.params['name']
   console.log(this.name)
  }

  handleSuccessResponse(response){
    this.welcomeMessage=response
  }
  handleErrorResponse(error){
    this.errorServiceMessage=error.error.message
  }
}
