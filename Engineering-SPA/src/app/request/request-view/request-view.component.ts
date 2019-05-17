import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../_models/request';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { options } from 'src/app/_data/options';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  requests: Request[];
  pagination: Pagination;
  groups = options.groups;
  locations = options.locations;
  requestParams: any = {};
  orderList = [{value: 'esr', display: 'ESR'},
    {value: 'dateInitiated', display: 'Date Initiated'},
    {value: 'approved', display: 'Approved'}];
  engineersList: any;
  authorizedToCreate: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute,
    private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.requests = data['requests'].result;
      this.pagination = data['requests'].pagination;
    });

    this.getEngineers();
    this.isAuthorized();

    this.requestParams.group = '';
    this.requestParams.locationOfProject = '';
    this.requestParams.engineerAssigned = '';
    this.requestParams.esr = '';
    this.requestParams.approved = false;
    this.requestParams.orderBy = 'esr';
  }

  isAuthorized() {
    this.userService.isAuthorizedToCreate().subscribe(response => {
      this.authorizedToCreate = response;
    }, error => {
      console.log(error);
    });
  }

  resetFilters() {
    this.requestParams.group = '';
    this.requestParams.esr = '';
    this.requestParams.approved = false;
    this.requestParams.locationOfProject = '';
    this.requestParams.engineerAssigned = '';
    this.loadRequests();
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadRequests();
  }

  getEngineers() {
    this.userService.getGroupMembers().subscribe(response => {
      this.engineersList = response;
    }, error => {
      this.alertify.error('Error retrieving list of engineers.');
    });
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
