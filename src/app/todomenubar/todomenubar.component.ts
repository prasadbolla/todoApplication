import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-aut-service';

@Component({
  selector: 'app-todomenubar',
  templateUrl: './todomenubar.component.html',
  styleUrls: ['./todomenubar.component.css']
})
export class TodomenubarComponent implements OnInit {
  
  constructor(private authenticationService: BasicAuthenticationService) { }

  ngOnInit() {
   
  }

}
