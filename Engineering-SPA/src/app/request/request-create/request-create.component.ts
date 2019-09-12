import { Component, OnInit, TemplateRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/_services/request.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { options } from 'src/app/_data/options';
import { UserService } from 'src/app/_services/user.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
  modalRef: BsModalRef;

  constructor(private requestService: RequestService, private router: Router,
    private alertify: AlertifyService, private userService: UserService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername() {
    this.userService.getUsername().subscribe((response) => {
      this.username = response;
    }, error => {
      this.alertify.error(error);
    });
  }

  checkValues(): boolean {
    const props = Object.getOwnPropertyNames(this.model);
    if (props.length < 5) {
      this.alertify.error('Please complete all fields....');
      return false;
    }
    return true;
  }

  submit() {
    this.model.initiatedBy = this.username;
    if (this.checkValues()) {
      this.requestService.submit(this.model).subscribe(response => {
        this.alertify.success('Successfully created request.');
        this.request = Object.assign({}, response);
        this.router.navigate(['/requests/' + this.request.esr]);
      }, error => {
        this.alertify.error(error);
      });
    }

    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  cancel(template: TemplateRef<any>) {
    this.modalRef.hide();
  }

}
