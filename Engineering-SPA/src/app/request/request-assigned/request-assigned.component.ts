import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from 'src/app/_services/request.service';
import { Request } from '../../_models/request';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-request-assigned',
  templateUrl: './request-assigned.component.html',
  styleUrls: ['./request-assigned.component.css']
})
export class RequestAssignedComponent implements OnInit {
  requests: Request[];
  pagination: Pagination;
  requestParams: any = {};
  assigned = true;
  username: any;
  @Output() cancelCreate = new EventEmitter();
  createMode = true;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.requests = data['requests'].result;
      this.pagination = data['requests'].pagination;
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    (this.assigned) ? this.loadAssignedRequests() : this.resetFilters();
  }

  toggleApproved() {
    this.assigned = !this.assigned;
    (this.assigned) ? this.loadAssignedRequests() : this.resetFilters();
  }

  loadAssignedRequests() {
    this.requestService.getAssignedRequests(this.pagination.currentPage, this.pagination.itemsPerPage, this.requestParams)
      .subscribe((res: PaginatedResult<Request[]>) => {
      this.requests = res.result;
      this.pagination = res.pagination;
    }, error => {
      console.log(error);
    });
  }

  resetFilters() {
    this.requestParams.department = '';
    this.requestParams.esr = '';
    this.requestParams.approved = false;
    this.requestParams.locationOfProject = '';
    this.requestParams.engineerAssigned = '';
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getRequests(this.pagination.currentPage, this.pagination.itemsPerPage, this.requestParams)
      .subscribe((res: PaginatedResult<Request[]>) => {
      this.requests = res.result;
      this.pagination = res.pagination;
    }, error => {
      console.log(error);
    });
  }

cancel() {
  this.createMode = !this.createMode;
  this.cancelCreate.emit(this.createMode);
}

}
