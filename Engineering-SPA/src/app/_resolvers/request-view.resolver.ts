import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RequestService } from '../_services/request.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RequestViewResolver implements Resolve<Request[]> {
  pageNumber = 1;
  pageSize = 10;

  constructor(private requestService: RequestService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.requestService.getRequests(this.pageNumber, this.pageSize)
      .pipe(
        catchError(error => {
          console.log(error);
          this.router.navigate(['/home']);
          return of(null);
        })
      );
  }

}
