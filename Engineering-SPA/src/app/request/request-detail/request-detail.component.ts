import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../_models/request';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request;
  authorizedToApprove: any;
  approved: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.request = data['request'];
      this.approved = this.request.approved;
    });

    this.isAuthorizedToApprove();
  }

  // enableApproval() {

  // }

  isAuthorizedToApprove() {
    this.userService.isAuthorizedToApprove().subscribe(response => {
      this.authorizedToApprove = response;
    }, error => {
      console.log(error);
    });
  }

  // loadUser() {
  //   this.requestService.getRequest(this.route.snapshot.params['esr']).subscribe((request: Request) => {
  //     this.request = request;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
