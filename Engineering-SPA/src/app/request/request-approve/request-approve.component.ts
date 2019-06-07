import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../_models/request';
import { options } from 'src/app/_data/options';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  request: Request;
  approvedRequest: any = {};
  departments = options.departments;
  locationsList = options.locations;
  engineersList: any;
  firstVal = undefined;
  // model: any = {};

  constructor(private requestService: RequestService, private route: ActivatedRoute,
    private router: Router, private alertify: AlertifyService, private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.request = data['request'];
    });

    this.getEngineers();
  }

  getEngineers() {
    this.userService.getGroupMembers().subscribe(response => {
      this.engineersList = response;
    }, error => {
      this.alertify.error('Error retrieving list of engineers.');
    });
  }

  approve() {
    if (this.request.engineerAssigned != null) {
      this.request.approved = true;
      this.requestService.approve(this.request).subscribe(response => {
        this.approvedRequest = Object.assign({}, response);
        this.router.navigate(['/requests/' + this.approvedRequest.esr]);
        this.alertify.success('Request has been approved.');
      }, error => {
        this.alertify.error('There was an error approving the request.');
      });
    } else {
      this.alertify.error('Please assign an engineer to the request');
    }
  }

}
