import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/_services/request.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { options } from 'src/app/_data/options';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  baseUrl = environment.apiUrl;
  model: any = {};
  request: any = {};
  departments = options.departments;
  locationsList = options.locations;
  username: any;

  constructor(private requestService: RequestService, private router: Router,
    private alertify: AlertifyService, private userService: UserService) { }

  ngOnInit() {
    this.getUsername();
    // this.getRole();
  }

  getUsername() {
    this.userService.getUsername().subscribe((response) => {
      // this.alertify.success('Welcome!');
      this.username = response;
      console.log(response);
    }, error => {
      this.alertify.error(error);
    });
  }

  // getRole() {
  //   this.userService.isAuthorizedToApprove().subscribe(response => {
  //     console.log(response);
  //   });
  // }

  submit() {
    this.model.initiatedBy = this.username;
    this.requestService.submit(this.model).subscribe(response => {
      this.alertify.success('Successfully created request.');
      this.request = Object.assign({}, response);
      this.router.navigate(['/requests/' + this.request.esr]);
    }, error => {
      this.alertify.error(error);
    });
  }

}
