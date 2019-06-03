import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RequestService } from '../_services/request.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RequestAssignedResolver implements Resolve<Request[]> {
  pageNumber = 1;
  pageSize = 5;
  requestParams: any = {};

  constructor(private requestService: RequestService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.requestParams.user = 'jjones'; // REVIEW THIS
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
