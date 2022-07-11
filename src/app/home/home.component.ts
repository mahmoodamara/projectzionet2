import { Component, OnInit } from '@angular/core';

  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
path: String = "src/assets/images/arrow.png"

  constructor() {

   }

  ngOnInit(): void {
  }

}
