import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styleUrls: ['./errorhandling.component.css']
})
export class ErrorhandlingComponent implements OnInit {
errorMessage='An Error Occurred'
  constructor() { }

  ngOnInit() {
  }

}
