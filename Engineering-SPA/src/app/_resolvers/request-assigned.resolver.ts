import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RequestService } from '../_services/request.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../_services/user.service';

@Injectable()
export class RequestAssignedResolver implements Resolve<Request[]> {
  pageNumber = 1;
  pageSize = 10;
  requestParams: any = {};
  username: any;

  constructor(private requestService: RequestService, private router: Router, private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.requestService.getAssignedRequests(this.pageNumber, this.pageSize, this.requestParams)
      .pipe(
        catchError(error => {
          console.log(error);
          this.router.navigate(['/home']);
          return of(null);
        })
      );
  }

}
