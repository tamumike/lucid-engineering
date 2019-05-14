import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  requests: any;
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.http.get(this.baseUrl).subscribe(response => {
      this.requests = response;
    }, error => {
      console.log(error);
    });
  }

}
