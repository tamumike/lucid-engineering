import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/_services/request.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Request } from '../../_models/request';
import { FormControl } from '@angular/forms';
import { options } from 'src/app/_data/options';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request;
  priority = new FormControl('');
  locationsList = options.locations;
  model: any = {};
  modalRef: BsModalRef;
  engineersList: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute,
    private router: Router, private alertify: AlertifyService, private userService: UserService, private modalService: BsModalService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.request = data['request'];
    });

    this.getEngineers();
    this.model = Object.assign({}, this.request);
    this.priority.setValue(this.request.priority);
  }

  increasePriority() {
    let current = this.priority.value;
    if (current < 3) {
      current++;
      this.priority.setValue(current);
    }
    this.model.priority = this.priority.value;
  }

  getEngineers() {
    this.userService.getGroupMembers().subscribe(response => {
      this.engineersList = response;
    }, error => {
      this.alertify.error('Error retrieving list of engineers.');
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  cancel(template: TemplateRef<any>) {
    this.modalRef.hide();
  }

  cancelEdit() {
    this.router.navigate(['/requests/' + this.request.esr]);
  }

  decreasePriority() {
    let current = this.priority.value;
    if (current > 1) {
      current--;
      this.priority.setValue(current);
    }
    this.model.priority = this.priority.value;
  }

  applyEdits() {
    const changesCheck = this.requestService.checkForChanges(this.request, this.model);
    if (changesCheck) {
      this.requestService.updateRequest(this.model).subscribe(response => {
        this.alertify.success(`Request ${this.request.esr} has been updated`);
        this.router.navigate(['/requests/' + this.request.esr]);
      }, error => {
        this.alertify.error('There was a problem saving the request.');
      });
    } else {
      this.alertify.error('No changes were detected');
    }
    this.modalRef.hide();
  }

}
