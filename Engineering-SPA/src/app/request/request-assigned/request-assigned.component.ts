import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private requestService: RequestService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.getUsername();
    this.route.data.subscribe(data => {
      this.requests = data['requests'].result;
      this.pagination = data['requests'].pagination;
    });
  }

  getUsername() {
    this.userService.getUsername().subscribe((response) => {
      this.username = response;
    }, error => {
      console.log(error);
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadAssignedRequests();
  }

  toggleApproved() {
    this.assigned = !this.assigned;
    (this.assigned) ? this.loadAssignedRequests() : this.resetFilters();
  }

  loadAssignedRequests() {
    this.requestParams.user = this.username;
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

}
