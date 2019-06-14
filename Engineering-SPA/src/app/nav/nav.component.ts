import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.getUsername();
  }

  getUsername() {
    this.userService.getUsername().subscribe((response) => {
      this.username = response;
    }, error => {
      console.log(error);
    });
  }
}
