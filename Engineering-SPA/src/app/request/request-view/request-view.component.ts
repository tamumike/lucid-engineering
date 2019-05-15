import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../_models/request';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  requests: Request[];

  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.requests = data['requests'];
    });
  }

  // loadRequests() {
  //   this.requestService.getRequests().subscribe((res: Request[]) => {
  //     this.requests = res;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
