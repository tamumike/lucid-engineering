import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  createMode: boolean;

  constructor() { }

  ngOnInit() {
  }

  cancelCreateMode(createMode: boolean) {
    this.createMode = !createMode;
  }

  toggleCreate() {
    this.createMode = true;
  }


}
