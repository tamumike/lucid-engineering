import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/_services/request.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  baseUrl = environment.apiUrl;
  model: any = {};

  constructor(private requestService: RequestService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  submit() {
    this.requestService.submit(this.model).subscribe(() => {
      this.alertify.success('Successfully created request.');
      // this.router.navigate(['/requests/:' + this.model.esr]);
    }, error => {
      this.alertify.error(error);
    });
  }

}
