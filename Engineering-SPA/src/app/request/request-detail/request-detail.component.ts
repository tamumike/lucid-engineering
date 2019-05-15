import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../_models/request';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request;
  approved: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.request = data['request'];
      this.approved = this.request.approved;
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
