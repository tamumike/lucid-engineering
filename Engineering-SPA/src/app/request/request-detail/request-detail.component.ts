import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../_models/request';
import { UserService } from 'src/app/_services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { options } from '../../_data/options';

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
  statuses = options.statuses;
  model: any = {};
  status = new FormControl('');

  constructor(private requestService: RequestService, private route: ActivatedRoute, private userService: UserService,
    private modalService: BsModalService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.request = data['request'];
      this.approved = this.request.approved;
    });

    this.status.setValue(this.request.status);
    this.isAuthorizedToApprove();
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

  updateStatus() {
    this.status.setValue(this.model.status);
  }

  changeStatus() {
    this.model.esr = this.request.esr;
    this.requestService.changeStatus(this.model).subscribe(response => {
      this.modalRef.hide();
    }, error => {
      console.log(error);
    });
  }
}
