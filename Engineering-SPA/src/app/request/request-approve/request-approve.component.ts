import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../_models/request';
import { options } from 'src/app/_data/options';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
  priority = new FormControl('');
  modalRef: BsModalRef;
  model: any = {};

  constructor(private requestService: RequestService, private route: ActivatedRoute,
    private router: Router, private alertify: AlertifyService, private userService: UserService, private modalService: BsModalService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.request = data['request'];
    });

    this.getEngineers();
    this.priority.setValue(this.request.priority);
    this.model = Object.assign({}, this.request);
  }

  increasePriority() {
    let current = this.priority.value;
    if (current < 3) {
      current++;
      this.priority.setValue(current);
    }
  }

  decreasePriority() {
    let current = this.priority.value;
    if (current > 1) {
      current--;
      this.priority.setValue(current);
    }
  }

  getEngineers() {
    this.userService.getGroupMembers().subscribe(response => {
      this.engineersList = response;
    }, error => {
      this.alertify.error('Error retrieving list of engineers.');
    });
  }

  approve() {
    if (this.requestService.checkForChanges(this.request, this.model)) {
      if (this.model.engineerAssigned != null) {
        this.requestService.approve(this.model).subscribe(response => {
          this.approvedRequest = Object.assign({}, response);
          this.router.navigate(['/requests/' + this.approvedRequest.esr]);
          this.alertify.success(`Request ${this.model.esr} has been successfully updated.`);
        }, error => {
          this.alertify.error('There was an error approving the request.');
        });
      } else {
        this.alertify.error('Please assign an engineer to the request');
      }
    } else {
      this.alertify.error('No changes detected.');
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
