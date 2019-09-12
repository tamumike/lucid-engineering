import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../_models/request';
import { UserService } from 'src/app/_services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { options } from '../../_data/options';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request;
  authorizedToApprove: any;
  approved: any;
  modalRef: BsModalRef;
  editMode = false;
  model: any = {};
  isCanceled = false;
  isCompleted = false;
  approvedRequest: any = {};

  constructor(private requestService: RequestService, private route: ActivatedRoute, private userService: UserService,
    private modalService: BsModalService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.request = data['request'];
      this.approved = this.request.approved;
    });

    this.checkStatus();
    this.isAuthorizedToApprove();
    this.model = Object.assign({}, this.request);
  }

  isAuthorizedToApprove() {
    this.userService.isAuthorizedToApprove().subscribe(response => {
      this.authorizedToApprove = response;
    }, error => {
      console.log(error);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  cancel() {
    this.modalRef.hide();
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  changeStatus() {
    this.model.esr = this.request.esr;
    this.requestService.changeStatus(this.model).subscribe(response => {
    }, error => {
      console.log(error);
    });
  }

  checkStatus() {
    this.request.status === 'Canceled' ? this.isCanceled = true : this.isCanceled = false;
    this.request.status === 'Completed' ? this.isCompleted = true : this.isCompleted = false;
  }

  completeRequest() {
    this.requestService.completeRequest(this.request).subscribe(response => {
      this.alertify.success(`Request ${this.request.esr} has been completed!`);
      this.router.navigate(['/home']);
    }, error => {
      this.alertify.error('Something went wrong....');
    });
    this.modalRef.hide();
  }

  cancelRequest() {
    this.requestService.cancelRequest(this.request).subscribe(response => {
      this.approvedRequest = Object.assign({}, response);
      this.alertify.success(`Request ${this.request.esr} has been canceled.`);
      this.router.navigate(['/home']);
    }, error => {
      this.alertify.error('Something went wrong....');
    });
    this.modalRef.hide();
  }
}
